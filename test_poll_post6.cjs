const axios = require('axios');
async function run() {
  try {
     const payload = {
         messages: [
             { role: "user", content: "System: You are a helpful AI named Skizo.\n\nUser: Who are you?" }
         ]
     };
     const response = await axios.post('https://text.pollinations.ai/', payload, {
         timeout: 10000,
         headers: { 'Content-Type': 'application/json' }
     });
     console.log("POST Response:", response.data);
  } catch (e) {
     console.error("POST Error:", e.message);
  }
}
run();
