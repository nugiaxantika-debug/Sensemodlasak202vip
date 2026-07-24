const ddg = require('duckduckgo-ai-chat-cjs');
async function run() {
  try {
     console.log(ddg);
     const chat = await ddg.initChat('gpt-4o-mini');
     const text = await chat.fetchMessage("hello");
     console.log("ddg:", text);
  } catch(e) { console.error("ddg error:", e.message); }
}
run();
