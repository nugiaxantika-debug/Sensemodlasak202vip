const axios = require('axios');
async function run() {
  try {
     const res = await axios.get('https://api.vreden.my.id/api/ai/gemini?query=hello', { timeout: 10000 });
     console.log("Vreden:", res.data);
  } catch(e) { console.error("Vreden error:", e.message); }
}
run();
