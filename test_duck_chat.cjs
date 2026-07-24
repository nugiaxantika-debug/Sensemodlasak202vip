const axios = require('axios');
async function run() {
  try {
     const textRes = await axios.get('https://api.duckduckgo.com/?q=hello&format=json', {
         timeout: 10000
     });
     console.log("DDG Response:", textRes.data);
  } catch (e) {
     console.error("DDG Error:", e.message);
  }
}
run();
