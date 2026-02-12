export default async (request, context) => {
  const url = new URL(request.url);
  const secret = Deno.env.get("SITE_SECRET")?.trim();

  if (!secret) {
    return new Response("Configuration Error: SITE_SECRET is not defined in Netlify environment variables.", { status: 500 });
  }

  // 1. Check if they already have a valid session cookie
  const cookie = context.cookies.get("lumen_access");
  if (cookie === "granted") {
    return context.next(); // Let them through
  }

  // 2. If no cookie, look for the special URL parameters
  const expires = url.searchParams.get("expires");
  const signature = url.searchParams.get("sig");

  // If there's no token, block access
  if (!expires || !signature) {
    return new Response("Access Denied: You need a special link to view this site.", { status: 401 });
  }

  // 3. Check if the 24 hours have passed
  if (Date.now() > parseInt(expires)) {
    return new Response("Access Expired: This link is no longer valid.", { status: 403 });
  }

  // 4. Verify the signature to ensure they didn't fake the time
  const encoder = new TextEncoder();
  const data = encoder.encode(expires + secret);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const expectedSignature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  if (signature !== expectedSignature) {
    // For debugging purposes, we could show a hint, but it's better to keep it secure.
    // However, since this is a private project, we'll provide a bit more info for the user.
    return new Response(`Access Denied: Invalid secure link. (Signature Mismatch)`, { status: 403 });
  }

  // 5. Success! Give them a 24-hour cookie so they can browse normally
  context.cookies.set({
    name: "lumen_access",
    value: "granted",
    expires: new Date(parseInt(expires)),
    httpOnly: true,
    secure: true,
  });

  // Redirect to the clean URL (removes the ugly tracking codes from the address bar)
  url.searchParams.delete("expires");
  url.searchParams.delete("sig");
  return Response.redirect(url, 302);
};
