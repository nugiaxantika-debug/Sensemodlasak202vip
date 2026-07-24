const { G4F } = require('g4f');
const g4f = new G4F();
async function run() {
  try {
     const messages = [{ role: 'user', content: 'Hello' }];
     const text = await g4f.chatCompletion(messages);
     console.log("g4f:", text);
  } catch(e) { console.error("g4f error:", e.message); }
}
run();
