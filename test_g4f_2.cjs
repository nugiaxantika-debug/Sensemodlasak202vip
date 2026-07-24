const { G4F } = require('g4f');
const g4f = new G4F();
async function run() {
  try {
     const text = await g4f.chatCompletion([{ role: 'user', content: 'Hello' }], { model: 'gpt-3.5-turbo' });
     console.log("g4f:", text);
  } catch(e) { console.error("g4f error:", e.message); }
}
run();
