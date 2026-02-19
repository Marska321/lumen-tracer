const fs = require('fs');
const crypto = require('crypto');

// Configuration
const secret = (process.env.SITE_SECRET || 'LumenTracerSecret2024!').trim();
const baseUrl = 'https://lumen-tracer.netlify.app'; // Change this to your actual Netlify site URL

// 1. Generate Expiration Timestamp (24 hours from now)
const oneDayInMs = 24 * 60 * 60 * 1000;
const expires = Date.now() + oneDayInMs;

// 2. Create Signature
// The edge function expects: SHA-256 of (expires + secret)
const dataToSign = expires + secret;
const signature = crypto.createHash('sha256').update(dataToSign).digest('hex');

// 3. Create Base64 Token
// We combine expires and signature into a single string "expires:signature" and base64 encode it
// This makes the URL look cleaner and less "phishy" to filters like Bitly
const tokenPayload = `${expires}:${signature}`;
const token = Buffer.from(tokenPayload).toString('base64');

// 4. Construct Link
const link = `${baseUrl}/?token=${token}`;

const output = `---------------------------------------------------
GENERATED SECURE LINK (Valid for 24 Hours)
---------------------------------------------------
Secret Used: ${secret}
Expires At:  ${new Date(expires).toLocaleString()}
---------------------------------------------------
LINK (New Token Format):
${link}
---------------------------------------------------

USER-FRIENDLY SHARING TEMPLATE:
---------------------------------------------------
Hey! You've been invited to explore the Lumen Tracer Knowledge Web.
This link will be active for the next 24 hours:

🔗 Access Now: ${link}

Explore the CAPS Mathematics curriculum from Grade R to 9 with
interactive data visualizations and remediation strategies.
---------------------------------------------------
`;

console.log(output);
fs.writeFileSync('link_output.txt', output);
