const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const readline = require('readline');

// Configuration
const secret = (process.env.SITE_SECRET || 'LumenTracerSecret2024!').trim();
const baseUrl = 'https://lumen-tracer.netlify.app';
const linksFilePath = path.join(__dirname, 'netlify', 'edge-functions', 'data', 'short-links.json');

// Helper: Generate Secure Token Link
function generateSecureLink() {
    const oneDayInMs = 24 * 60 * 60 * 1000;
    const expires = Date.now() + oneDayInMs;
    const dataToSign = expires + secret;
    const signature = crypto.createHash('sha256').update(dataToSign).digest('hex');
    const tokenPayload = `${expires}:${signature}`;
    const token = Buffer.from(tokenPayload).toString('base64');
    return `${baseUrl}/?token=${token}`;
}

// Helper: Generate Random Short Code
function generateShortCode(length = 6) {
    return crypto.randomBytes(length).toString('hex').substring(0, length);
}

// Main Interactive Flow
const run = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (query) => new Promise((resolve) => rl.question(query, resolve));

    console.log('\n--- Lumen Tracer Short Link Generator ---\n');

    // 1. Generate Target URL
    const targetUrl = generateSecureLink();
    console.log(`Generated Secure Target URL:\n${targetUrl}\n`);

    // 2. Ask for Alias
    const defaultCode = generateShortCode();
    const aliasInput = await question(`Enter custom alias (or press Enter for '${defaultCode}'): `);
    const alias = aliasInput.trim() || defaultCode;

    // 3. Update Database
    let links = {};
    if (fs.existsSync(linksFilePath)) {
        try {
            links = JSON.parse(fs.readFileSync(linksFilePath, 'utf8'));
        } catch (e) {
            console.error("Error reading links file, starting fresh.");
        }
    }

    if (links[alias]) {
        const overwrite = await question(`Alias '${alias}' already exists! Overwrite? (y/N): `);
        if (overwrite.toLowerCase() !== 'y') {
            console.log('Aborted.');
            rl.close();
            return;
        }
    }

    links[alias] = targetUrl;
    fs.writeFileSync(linksFilePath, JSON.stringify(links, null, 2));

    console.log('\n---------------------------------------------------');
    console.log(`✅ Short Link Created: ${alias}`);
    console.log(`🔗 URL: ${baseUrl}/go/${alias}`);
    console.log('---------------------------------------------------');
    console.log('\n⚠️  IMPORTANT: You must push to GitHub for this to work!');
    console.log(`   git add . && git commit -m "Add short link: ${alias}" && git push origin master`);
    console.log('---------------------------------------------------');

    rl.close();
};

run();
