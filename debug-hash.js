const crypto = require('crypto');

async function debug() {
    const secret = 'LumenTracerSecret2024!';
    const expires = '1770973340113';
    const dataToSign = expires + secret;

    console.log('Data to sign:', dataToSign);

    // 1. Node.js Crypto (used in generate-link.js)
    const nodeHash = crypto.createHash('sha256').update(dataToSign).digest('hex');
    console.log('Node.js Hash (hex):   ', nodeHash);

    // 2. Web Crypto (used in check-access.js)
    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(dataToSign);
        const hashBuffer = await crypto.webcrypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const webHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        console.log('Web Crypto Hash (hex):', webHash);

        if (nodeHash === webHash) {
            console.log('SUCCESS: Hashes match perfectly.');
        } else {
            console.log('FAILURE: Hashes do NOT match.');
        }
    } catch (err) {
        console.error('Web Crypto error:', err);
    }
}

debug();
