const axios = require('axios');
async function run() {
  try {
     const res = await axios.get('https://itzpire.com/ai/gpt-logic?q=hello&logic=You are a helpful assistant', { timeout: 10000 });
     console.log("Itzpire:", res.data);
  } catch(e) { console.error("Itzpire error:", e.message); }
}
run();
