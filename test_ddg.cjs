const { Chat } = require('duckduckgo-ai-chat-cjs');
async function run() {
  try {
     const chat = new Chat('gpt-4o-mini');
     const text = await chat.sendMessage("hello");
     console.log("ddg:", text);
  } catch(e) { console.error("ddg error:", e.message); }
}
run();
