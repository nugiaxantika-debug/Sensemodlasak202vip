const axios = require('axios');
async function run() {
  try {
     const payload = {
         messages: [
             { role: "system", content: "You are GPT-4." },
             { role: "user", content: "Who are you?" }
         ]
     };
     const response = await axios.post('https://text.pollinations.ai/', payload, {
         timeout: 10000,
         headers: { 'Content-Type': 'application/json' }
     });
     console.log("POST without model Response:", response.data);
  } catch (e) {
     console.error("POST Error:", e.message);
  }
}
run();
