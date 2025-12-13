const fs = require('fs');
const path = require('path');

const envPath = path.resolve(process.cwd(), '.env');
console.log('Reading .env from:', envPath);

try {
    const content = fs.readFileSync(envPath); // Buffer
    console.log('File size:', content.length, 'bytes');
    console.log('Hex start:', content.subarray(0, 20).toString('hex'));

    const text = content.toString('utf8');
    console.log('--- CONTENT START ---');
    console.log(text);
    console.log('--- CONTENT END ---');

    const lines = text.split(/\r?\n/);
    console.log('Line count:', lines.length);
    lines.forEach((line, i) => {
        console.log(`Line ${i + 1}: "${line}" [len: ${line.length}]`);
        if (line.includes('=')) {
            const parts = line.split('=');
            console.log(`  Key: "${parts[0]}"`);
        }
    });

} catch (err) {
    console.error('Error reading .env:', err);
}
