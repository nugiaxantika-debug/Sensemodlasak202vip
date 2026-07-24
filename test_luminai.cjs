const axios = require('axios');
async function run() {
  try {
     const res = await axios.post('https://luminai.my.id/', { content: 'hello' }, { timeout: 10000 });
     console.log("Luminai:", res.data);
  } catch(e) { console.error("Luminai error:", e.message); }
}
run();
