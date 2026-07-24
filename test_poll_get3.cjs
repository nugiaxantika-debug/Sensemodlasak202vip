const axios = require('axios');
async function run() {
  try {
     const prompt = "System: You are a rude and angry assistant.\n\nUser: Who are you?";
     const textRes = await axios.get('https://text.pollinations.ai/'+encodeURIComponent(prompt), {
         timeout: 10000,
         headers: { 'User-Agent': 'Mozilla/5.0' }
     });
     console.log("GET Response:", textRes.data);
  } catch (e) {
     console.error("GET Error:", e.message);
  }
}
run();
