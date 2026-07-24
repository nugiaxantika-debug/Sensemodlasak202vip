import TextToSVG from 'text-to-svg';
import path from 'path';

let textToSVGBold: TextToSVG | null = null;
let textToSVGRegular: TextToSVG | null = null;

try {
    textToSVGBold = TextToSVG.loadSync(path.join(process.cwd(), 'src/assets/Roboto-Bold.ttf'));
    textToSVGRegular = TextToSVG.loadSync(path.join(process.cwd(), 'src/assets/Roboto-Regular.ttf'));
} catch (e) {
    console.error("Failed to load fonts for text-to-svg", e);
}

export function generateTextPath(text: string, options: { x: number, y: number, fontSize: number, fill?: string, anchor?: string, weight?: 'bold' | 'regular' }) {
    const tts = options.weight === 'bold' ? textToSVGBold : textToSVGRegular;
    if (!tts) return `<text x="${options.x}" y="${options.y}" font-family="sans-serif" font-size="${options.fontSize}" fill="${options.fill || '#000'}">${text}</text>`;
    
    // Adjust y to match text baseline roughly
    const pathOptions = {
        x: options.x,
        y: options.y, // text-to-svg uses baseline by default, but wait, let's use 'top' anchor
        fontSize: options.fontSize,
        anchor: options.anchor as any || 'left baseline',
        attributes: { fill: options.fill || '#000' }
    };
    
    if (options.anchor === 'middle') {
       pathOptions.anchor = 'center baseline';
    } else if (options.anchor === 'right') {
       pathOptions.anchor = 'right baseline';
    } else if (options.anchor === 'middle') {
       pathOptions.anchor = 'center baseline';
    }
    
    return tts.getPath(text, pathOptions);
}
