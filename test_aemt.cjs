const axios = require('axios');
async function run() {
  try {
     const res = await axios.get('https://aemt.me/gpt4?text=hello', { timeout: 10000 });
     console.log("Aemt:", res.data);
  } catch(e) { console.error("Aemt error:", e.message); }
}
run();
