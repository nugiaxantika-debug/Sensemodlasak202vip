import axios from 'axios';

async function run() {
  try {
     const response = await axios.get('https://text.pollinations.ai/' + encodeURIComponent("Hello"), {
         timeout: 10000,
         headers: { 'User-Agent': 'Mozilla/5.0' }
     });
     console.log("Response GET:", response.data);
  } catch (e) {
     console.error("Error GET:", e.message);
  }
}
run();
