const axios = require('axios');
async function run() {
  try {
     const res = await axios.get('https://api.agatz.xyz/api/ai/gpt?message=hello', { timeout: 10000 });
     console.log("Agatz:", res.data);
  } catch(e) { console.error("Agatz error:", e.message); }
}
run();
