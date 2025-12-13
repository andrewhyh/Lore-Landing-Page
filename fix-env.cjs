const fs = require('fs');
const path = require('path');

const envPath = path.resolve(process.cwd(), '.env');
console.log('Fixing .env encoding...');

try {
    const content = fs.readFileSync(envPath);

    // Check for UTF-16 LE BOM (FF FE)
    if (content[0] === 0xFF && content[1] === 0xFE) {
        console.log('Detected UTF-16 LE BOM. Converting to UTF-8...');
        // Decode as UTF-16 LE
        const text = content.toString('utf16le');
        // Write back as UTF-8
        fs.writeFileSync(envPath, text.trim(), 'utf8');
        console.log('Successfully converted .env to UTF-8.');
    } else {
        console.log('File does not appear to be UTF-16 LE.');
    }
} catch (err) {
    console.error('Error fixing .env:', err);
}
