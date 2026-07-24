const axios = require('axios');
async function run() {
  try {
     const res = await axios.get('https://api.siputzx.my.id/api/ai/gpt4?content=hello', { timeout: 10000 });
     console.log("Siputzx:", res.data);
  } catch(e) { console.error("Siputzx error:", e.message); }
}
run();
