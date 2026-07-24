const fs = require('fs');

function count(file) {
    let code = fs.readFileSync(file, 'utf8');
    let total = 0;
    const regex = /const ([a-zA-Z]+Commands) = \[([^\]]+)\];/g;
    let match;
    let counts = {};
    while ((match = regex.exec(code)) !== null) {
        let arrStr = match[2];
        let num = arrStr.split(',').length;
        counts[match[1]] = num;
    }
    
    // Now find totalFitur calculation
    let formulaMatch = code.match(/const totalFitur = (.*?);/);
    if(formulaMatch) {
        let items = formulaMatch[1].split(' + ').map(s => s.replace('.length', '').trim());
        for(let item of items) {
            if(counts[item]) {
                total += counts[item];
            }
        }
    }
    console.log(file, "->", total);
}
count('./src/services/whatsapp.ts');
count('/tmp/Sensemodlasak202vip/src/services/whatsapp.ts');
count('/tmp/Numolasakvipaja2/src/services/whatsapp.ts');
