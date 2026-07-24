const fs = require('fs');
let code = fs.readFileSync('src/services/whatsapp.ts', 'utf8');

const advancedFakeMoney = `
async function sendFakeMoney(sock: any, jid: string, msg: any, nominal: string, type: string, bgColor: string, prefix: string, textColor: string = "#ffffff") {
    try {
        await sock.sendMessage(jid, { text: \`⏳ *Sedang membuat Fake \${type}...*\` }, { quoted: msg });
        const safeNominal = nominal.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').substring(0, 20);
        
        const width = 1080;
        const height = 2400;
        
        // Colors specific to type, but fallback to DANA-like layout
        const mainColor = bgColor; 
        
        const svgImage = \`
          <svg width="\${width}" height="\${height}" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stop-color="\${mainColor}" />
                 <stop offset="30%" stop-color="\${mainColor}" />
                 <stop offset="30%" stop-color="#f5f5f5" />
                 <stop offset="100%" stop-color="#f5f5f5" />
              </linearGradient>
              <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="4" stdDeviation="10" flood-opacity="0.1" />
              </filter>
              <clipPath id="circleClip">
                <circle cx="540" cy="2250" r="100" />
              </clipPath>
            </defs>
            <rect width="100%" height="100%" fill="url(#bgGrad)"/>
            
            <!-- Header (DANA Style) -->
            <!-- App Logo / Icon Placeholder -->
            <circle cx="80" cy="100" r="30" fill="#fff" />
            <path d="M65 100 Q 80 85, 95 100 Q 80 115, 65 100" fill="\${mainColor}" />
            
            <!-- Nominal -->
            \${generateTextPath(prefix, {x: 130, y: 110, fontSize: 40, fill: '#fff', weight: 'bold'})}
            \${generateTextPath(safeNominal, {x: 200, y: 115, fontSize: 80, fill: '#fff', weight: 'bold'})}
            
            <!-- Eye icon -->
            <path d="M 450 100 Q 470 80 490 100 Q 470 120 450 100 Z" fill="none" stroke="#fff" stroke-width="5"/>
            <circle cx="470" cy="100" r="8" fill="#fff"/>
            <line x1="435" y1="75" x2="505" y2="125" stroke="#fff" stroke-width="5"/>
            
            <!-- Promo Button "Cobain DANA+" -->
            <rect x="700" y="60" width="330" height="80" rx="40" fill="#fff" opacity="0.2" />
            <rect x="700" y="60" width="330" height="80" rx="40" fill="none" stroke="#fff" stroke-width="2" />
            \${generateTextPath('Cobain ' + type + '+', {x: 865, y: 112, fontSize: 35, fill: '#fff', weight: 'bold', anchor: 'middle'})}
          
            <!-- Action Buttons Row -->
            <!-- 1. Isi Saldo -->
            <rect x="100" y="220" width="100" height="100" rx="25" fill="#fff" opacity="0.2"/>
            <rect x="100" y="220" width="100" height="100" rx="25" fill="none" stroke="#fff" stroke-width="4"/>
            <path d="M 150 240 L 150 280 M 130 260 L 170 260" stroke="#fff" stroke-width="10" stroke-linecap="round"/>
            <path d="M 135 245 L 150 230 L 165 245" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            \${generateTextPath('Isi Saldo', {x: 150, y: 370, fontSize: 35, fill: '#fff', weight: 'bold', anchor: 'middle'})}
            
            <!-- 2. Minta -->
            <rect x="350" y="220" width="100" height="100" rx="25" fill="#fff" opacity="0.2"/>
            <rect x="350" y="220" width="100" height="100" rx="25" fill="none" stroke="#fff" stroke-width="4"/>
            \${generateTextPath(prefix, {x: 400, y: 285, fontSize: 45, fill: '#fff', weight: 'bold', anchor: 'middle'})}
            <path d="M 370 245 L 400 275 L 430 245" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            \${generateTextPath('Minta', {x: 400, y: 370, fontSize: 35, fill: '#fff', weight: 'bold', anchor: 'middle'})}
            
            <!-- 3. Kirim -->
            <rect x="600" y="220" width="100" height="100" rx="25" fill="#fff" opacity="0.2"/>
            <rect x="600" y="220" width="100" height="100" rx="25" fill="none" stroke="#fff" stroke-width="4"/>
            \${generateTextPath(prefix, {x: 650, y: 285, fontSize: 45, fill: '#fff', weight: 'bold', anchor: 'middle'})}
            <path d="M 620 275 L 650 245 L 680 275" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
            \${generateTextPath('Kirim', {x: 650, y: 370, fontSize: 35, fill: '#fff', weight: 'bold', anchor: 'middle'})}
            
            <!-- 4. Pesan -->
            <rect x="850" y="220" width="100" height="100" rx="25" fill="#fff" opacity="0.2"/>
            <rect x="850" y="220" width="100" height="100" rx="25" fill="none" stroke="#fff" stroke-width="4"/>
            <path d="M 870 245 L 930 245 L 900 280 Z" fill="#fff"/>
            <circle cx="945" cy="225" r="18" fill="#ef4444"/>
            <circle cx="945" cy="225" r="18" fill="none" stroke="\${mainColor}" stroke-width="4"/>
            \${generateTextPath('Pesan', {x: 900, y: 370, fontSize: 35, fill: '#fff', weight: 'bold', anchor: 'middle'})}
          
            <!-- Promo Banner -->
            <rect x="50" y="450" width="980" height="250" rx="40" fill="#2563eb" opacity="0.3" />
            <rect x="50" y="450" width="980" height="250" rx="40" fill="url(#bgGrad)" />
            <circle cx="200" cy="570" r="80" fill="#fff" opacity="0.9"/>
            <circle cx="200" cy="570" r="70" fill="\${mainColor}" opacity="0.5"/>
            \${generateTextPath('Akses ' + type, {x: 520, y: 530, fontSize: 45, fill: '#fff', weight: 'bold', anchor: 'middle'})}
            \${generateTextPath('Bisa Tanpa Kuota!', {x: 520, y: 590, fontSize: 45, fill: '#facc15', weight: 'bold', anchor: 'middle'})}
            <rect x="380" y="620" width="280" height="60" rx="30" fill="#f43f5e" />
            \${generateTextPath('BELI YUK', {x: 520, y: 663, fontSize: 30, fill: '#fff', weight: 'bold', anchor: 'middle'})}
          
            <!-- Main Menu Grid (White Card) -->
            <rect x="40" y="750" width="1000" height="480" rx="30" fill="#fff" filter="url(#shadow)" />
            
            <!-- Grid Items Row 1 -->
            <!-- Item 1: Google Play Zone -->
            <polygon points="165,820 190,870 140,870" fill="#34d399"/>
            <polygon points="140,870 165,845 152,832" fill="#3b82f6"/>
            <polygon points="190,870 165,845 178,832" fill="#ef4444"/>
            \${generateTextPath('Google Play', {x: 165, y: 920, fontSize: 30, fill: '#555', anchor: 'middle'})}
            \${generateTextPath('Zone', {x: 165, y: 960, fontSize: 30, fill: '#555', anchor: 'middle'})}
            
            <!-- Item 2: A+ Rewards -->
            <rect x="390" y="820" width="60" height="50" fill="#8b5cf6" rx="10"/>
            <circle cx="420" cy="845" r="15" fill="#facc15" />
            \${generateTextPath('A+ Rewards', {x: 420, y: 940, fontSize: 30, fill: '#555', anchor: 'middle'})}
            
            <!-- Item 3: Travel -->
            <circle cx="665" cy="845" r="35" fill="#3b82f6"/>
            <path d="M 645 845 Q 665 825 685 845" fill="none" stroke="#fff" stroke-width="6"/>
            \${generateTextPath('Travel', {x: 665, y: 940, fontSize: 30, fill: '#555', anchor: 'middle'})}
            
            <!-- Item 4: Listrik -->
            <circle cx="915" cy="845" r="35" fill="#facc15"/>
            <path d="M 915 825 L 905 845 L 925 845 L 915 865" fill="#fff"/>
            \${generateTextPath('Listrik', {x: 915, y: 940, fontSize: 30, fill: '#555', anchor: 'middle'})}
          
            <!-- Grid Items Row 2 -->
            <!-- Item 5: Pulsa & Data -->
            <rect x="140" y="1020" width="50" height="60" fill="#ef4444" rx="10"/>
            \${generateTextPath('Rp', {x: 165, y: 1055, fontSize: 24, fill: '#fff', weight: 'bold', anchor: 'middle'})}
            \${generateTextPath('Pulsa & Data', {x: 165, y: 1140, fontSize: 30, fill: '#555', anchor: 'middle'})}
            
            <!-- Item 6: DANA Kaget -->
            <rect x="395" y="1025" width="50" height="50" fill="#0ea5e9" rx="10"/>
            <circle cx="420" cy="1050" r="10" fill="#fff"/>
            \${generateTextPath(type + ' Kaget', {x: 420, y: 1140, fontSize: 30, fill: '#555', anchor: 'middle'})}
            
            <!-- Item 7: Bayar Cicilan -->
            <rect x="640" y="1030" width="50" height="40" fill="#ef4444" rx="8"/>
            <rect x="645" y="1020" width="10" height="15" fill="#ef4444" rx="5"/>
            <rect x="675" y="1020" width="10" height="15" fill="#ef4444" rx="5"/>
            \${generateTextPath('Bayar Cicilan', {x: 665, y: 1140, fontSize: 30, fill: '#555', anchor: 'middle'})}
            
            <!-- Item 8: Lihat Semua -->
            <circle cx="895" cy="1035" r="10" fill="#64748b" />
            <circle cx="935" cy="1035" r="10" fill="#64748b" />
            <circle cx="895" cy="1075" r="10" fill="#64748b" />
            <circle cx="935" cy="1075" r="10" fill="#64748b" />
            \${generateTextPath('Lihat Semua', {x: 915, y: 1140, fontSize: 30, fill: '#555', anchor: 'middle'})}
          
            <!-- Feed Section -->
            <rect x="40" y="1260" width="1000" height="420" rx="30" fill="#fff" filter="url(#shadow)" />
            
            <!-- Feed 1 -->
            <circle cx="100" cy="1320" r="30" fill="\${mainColor}" />
            <path d="M 85 1310 Q 100 1335 115 1310" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
            \${generateTextPath('Feed', {x: 150, y: 1330, fontSize: 32, fill: '#111', weight: 'bold'})}
            \${generateTextPath('hai 👋, siap menjelajah feed?', {x: 240, y: 1330, fontSize: 30, fill: '#444'})}
            <path d="M 940 1310 L 970 1330 L 940 1350 Z" fill="\${mainColor}"/>
            
            <!-- Feed 2 -->
            <circle cx="100" cy="1410" r="30" fill="\${mainColor}" />
            <path d="M 85 1400 Q 100 1425 115 1400" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
            \${generateTextPath('Feed', {x: 150, y: 1420, fontSize: 32, fill: '#111', weight: 'bold'})}
            \${generateTextPath('masuk untuk lihat update terbaru!', {x: 240, y: 1420, fontSize: 30, fill: '#444'})}
            <path d="M 940 1400 L 970 1420 L 940 1440 Z" fill="\${mainColor}"/>
            
            <!-- Feed 3 -->
            <circle cx="100" cy="1500" r="30" fill="\${mainColor}" />
            <path d="M 85 1490 Q 100 1515 115 1490" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
            \${generateTextPath('Feed', {x: 150, y: 1510, fontSize: 32, fill: '#111', weight: 'bold'})}
            \${generateTextPath('berikan 💬, ❤️, 🎁 biar seru!', {x: 240, y: 1510, fontSize: 30, fill: '#444'})}
            <path d="M 940 1490 L 970 1510 L 940 1530 Z" fill="\${mainColor}"/>
            
            <!-- Feed 4 -->
            <circle cx="100" cy="1590" r="30" fill="\${mainColor}" />
            <path d="M 85 1580 Q 100 1605 115 1580" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>
            \${generateTextPath('Feed', {x: 150, y: 1600, fontSize: 32, fill: '#111', weight: 'bold'})}
            \${generateTextPath('sambungkan koneksi yang terpercaya!', {x: 240, y: 1600, fontSize: 30, fill: '#444'})}
            <path d="M 940 1580 L 970 1600 L 940 1620 Z" fill="\${mainColor}"/>
          
            <!-- Protection Banner -->
            <rect x="40" y="1710" width="1000" height="350" rx="30" fill="\${mainColor}" filter="url(#shadow)" />
            <rect x="140" y="1750" width="380" height="60" rx="30" fill="#fff" />
            <circle cx="170" cy="1780" r="20" fill="\${mainColor}" />
            \${generateTextPath(type.toUpperCase() + ' PROTECTION', {x: 200, y: 1790, fontSize: 26, fill: mainColor, weight: 'bold'})}
            \${generateTextPath('JAMINAN', {x: 140, y: 1870, fontSize: 55, fill: '#fff', weight: 'bold'})}
            \${generateTextPath('ANTI PENDING', {x: 140, y: 1940, fontSize: 80, fill: '#fff', weight: 'bold'})}
            <rect x="140" y="1970" width="380" height="55" rx="27" fill="#e11d48" />
            \${generateTextPath('Cek Perlindunganmu >', {x: 330, y: 2008, fontSize: 26, fill: '#fff', weight: 'bold', anchor: 'middle'})}
          
            <!-- Decorative Shield lines in Protection Banner -->
            <path d="M 750 1750 L 950 1750 L 950 1900 L 850 2000 L 750 1900 Z" fill="none" stroke="#fff" stroke-width="4" opacity="0.3"/>
            <path d="M 780 1780 L 920 1780 L 920 1880 L 850 1950 L 780 1880 Z" fill="none" stroke="#fff" stroke-width="4" opacity="0.3"/>
          
            <!-- Bottom Nav -->
            <rect x="0" y="2200" width="1080" height="200" fill="#fff" filter="url(#shadow)" />
            
            <!-- Nav 1: Beranda -->
            <path d="M 110 2270 L 140 2240 L 170 2270 L 170 2310 L 110 2310 Z" fill="#111"/>
            \${generateTextPath('Beranda', {x: 140, y: 2350, fontSize: 30, fill: '#111', weight: 'bold', anchor: 'middle'})}
            
            <!-- Nav 2: Aktivitas -->
            <rect x="320" y="2250" width="40" height="50" fill="none" stroke="#555" stroke-width="6" rx="5" />
            <line x1="320" y1="2275" x2="360" y2="2275" stroke="#555" stroke-width="4"/>
            \${generateTextPath('Aktivitas', {x: 340, y: 2350, fontSize: 30, fill: '#555', anchor: 'middle'})}
            
            <!-- Nav 3: PAY Button (Large Blue Circle overlapping) -->
            <circle cx="540" cy="2230" r="100" fill="#fff" />
            <circle cx="540" cy="2230" r="95" fill="\${mainColor}" />
            <!-- QR Icon inside PAY -->
            <rect x="495" y="2170" width="30" height="30" fill="none" stroke="#fff" stroke-width="6" rx="5" />
            <rect x="555" y="2170" width="30" height="30" fill="none" stroke="#fff" stroke-width="6" rx="5" />
            <rect x="495" y="2230" width="30" height="30" fill="none" stroke="#fff" stroke-width="6" rx="5" />
            <rect x="565" y="2240" width="20" height="20" fill="#fff" />
            <rect x="505" y="2180" width="10" height="10" fill="#fff" />
            \${generateTextPath('PAY', {x: 540, y: 2310, fontSize: 32, fill: '#fff', weight: 'bold', anchor: 'middle'})}
            
            <!-- Nav 4: Dompet -->
            <rect x="720" y="2260" width="50" height="40" fill="none" stroke="#555" stroke-width="6" rx="5" />
            <path d="M 720 2280 L 770 2280" stroke="#555" stroke-width="4"/>
            \${generateTextPath('Dompet', {x: 745, y: 2350, fontSize: 30, fill: '#555', anchor: 'middle'})}
            
            <!-- Nav 5: Saya -->
            <circle cx="945" cy="2265" r="15" fill="none" stroke="#555" stroke-width="6" />
            <path d="M 915 2310 Q 945 2280 975 2310" fill="none" stroke="#555" stroke-width="6" />
            \${generateTextPath('Saya', {x: 945, y: 2350, fontSize: 30, fill: '#555', anchor: 'middle'})}
          </svg>
        \`;
        
        const buffer = await sharp(Buffer.from(svgImage)).png().toBuffer();
        await sock.sendMessage(jid, { image: buffer, caption: \`✅ Fake \${type} berhasil dibuat!\` }, { quoted: msg });
    } catch (err: any) {
        console.error("Fakemoney error: ", err);
        await sock.sendMessage(jid, { text: \`❌ Gagal membuat fake \${type}.\` }, { quoted: msg });
    }
}
`;

code = code.replace(/async function sendFakeMoney[\s\S]*?\}\n\}/m, advancedFakeMoney.trim());
fs.writeFileSync('src/services/whatsapp.ts', code);
