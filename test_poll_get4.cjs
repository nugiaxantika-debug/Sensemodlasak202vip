const axios = require('axios');
async function run() {
  try {
     const textRes = await axios.get('https://text.pollinations.ai/'+encodeURIComponent("Hello who are you?"), {
         timeout: 10000,
         headers: { 'User-Agent': 'Mozilla/5.0' }
     });
     console.log("GET Response:", textRes.data);
  } catch (e) {
     console.error("GET Error:", e.message);
  }
}
run();
