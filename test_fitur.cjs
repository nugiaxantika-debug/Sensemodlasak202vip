const fs = require('fs');
let code = fs.readFileSync('src/services/whatsapp.ts', 'utf8');

const match = code.match(/const totalFitur = (.*?);/);
if (match) {
    console.log("Found formula:", match[1]);
}
