const fs = require('fs');
let code = fs.readFileSync('src/services/whatsapp.ts', 'utf8');

code = code.replace(/textLinesSVG \+= `<text x="20" y="\$\{30 \+ i\*25\}" font-family="Ubuntu, Noto Sans, DejaVu Sans, sans-serif" font-size="17" fill="#111b21">\$\{safeLine\}<\/text>`;/g, 
  "textLinesSVG += generateTextPath(safeLine, {x: 20, y: 30 + i*25, fontSize: 17, fill: '#111b21'});");

code = code.replace(/<text x="45" y="\$\{reactionY \+ 34\}" font-size="24">👍 ❤️ 😂 😮 😢 🙏 🤣<\/text>/g,
  `<text x="45" y="\${reactionY + 34}" font-size="24">👍 ❤️ 😂 😮 😢 🙏 🤣</text>`); // Leave emoji as text

code = code.replace(/<text x="20" y="35">Balas<\/text>/g, "${generateTextPath('Balas', {x: 20, y: 35, fontSize: 16})}");
code = code.replace(/<text x="20" y="85">Teruskan<\/text>/g, "${generateTextPath('Teruskan', {x: 20, y: 85, fontSize: 16})}");
code = code.replace(/<text x="20" y="135">Salin<\/text>/g, "${generateTextPath('Salin', {x: 20, y: 135, fontSize: 16})}");
code = code.replace(/<text x="20" y="185">Info<\/text>/g, "${generateTextPath('Info', {x: 20, y: 185, fontSize: 16})}");
code = code.replace(/<text x="20" y="235">Sematkan<\/text>/g, "${generateTextPath('Sematkan', {x: 20, y: 235, fontSize: 16})}");
code = code.replace(/<text x="20" y="285">Laporkan<\/text>/g, "${generateTextPath('Laporkan', {x: 20, y: 285, fontSize: 16})}");
code = code.replace(/<text x="20" y="335" fill="#ef4444">Hapus<\/text>/g, "${generateTextPath('Hapus', {x: 20, y: 335, fontSize: 16, fill: '#ef4444'})}");
code = code.replace(/<text x="30" y="\$\{menuY \+ menuHeight \+ 35\}" font-family="Ubuntu, Noto Sans, DejaVu Sans, sans-serif" font-size="14" fill="#667781">\$\{watermark\}<\/text>/g,
  "${generateTextPath(watermark, {x: 30, y: menuY + menuHeight + 35, fontSize: 14, fill: '#667781'})}");

fs.writeFileSync('src/services/whatsapp.ts', code);
