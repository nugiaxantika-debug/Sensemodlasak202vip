const axios = require('axios');
async function run() {
  try {
     const res = await axios.get('https://api.ryzendesu.vip/api/ai/chatgpt?text=hello', { timeout: 10000 });
     console.log("Ryzendesu:", res.data);
  } catch(e) { console.error("Ryzendesu error:", e.message); }
}
run();
