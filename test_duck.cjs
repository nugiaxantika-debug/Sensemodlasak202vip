const duck = require('duck-ai');
async function run() {
  try {
     const text = await duck.chat("hello");
     console.log("duck:", text);
  } catch(e) { console.error("duck error:", e.message); }
}
run();
