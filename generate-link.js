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

// 3. Construct Link
const link = `${baseUrl}/?expires=${expires}&sig=${signature}`;

const output = `---------------------------------------------------
GENERATED SECURE LINK (Valid for 24 Hours)
---------------------------------------------------
Secret Used: ${secret}
Expires At:  ${new Date(expires).toLocaleString()}
---------------------------------------------------
LINK:
${link}
---------------------------------------------------
`;

console.log(output);
fs.writeFileSync('link_output.txt', output);
