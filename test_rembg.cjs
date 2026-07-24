const fs = require('fs');
const { removeBackground } = require('@imgly/background-removal-node');

async function run() {
  try {
    const media = fs.readFileSync('test-font.png');
    const blob = new Blob([media], { type: 'image/png' });
    const resultBlob = await removeBackground(blob);
    const buffer = Buffer.from(await resultBlob.arrayBuffer());
    console.log("Success, buffer size:", buffer.length);
  } catch(e) {
    console.error("Error:", e.message);
  }
}
run();
