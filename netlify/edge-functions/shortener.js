import shortLinks from "./data/short-links.json" with { type: "json" };

export default async (request, context) => {
    const url = new URL(request.url);
    // Extract the code from the path (e.g., /go/demo -> demo)
    const pathParts = url.pathname.split('/');
    // Assuming the path is /go/:code, the code is the last part
    // If the path ends with a slash, we might need to handle empty string
    let code = pathParts[pathParts.length - 1];

    if (!code && pathParts.length > 2) {
        // Handle case where URL ends in slash /go/demo/
        code = pathParts[pathParts.length - 2];
    }

    if (!code) {
        return new Response("Invalid Short Link", { status: 404 });
    }

    const destination = shortLinks[code];

    if (destination) {
        return Response.redirect(destination, 302);
    } else {
        return new Response("Short Link Not Found", { status: 404 });
    }
};
