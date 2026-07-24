const { gpt } = require("gpti");

async function run() {
  try {
    gpt({
        messages: [
            {
                role: "user",
                content: "Hello"
            }
        ],
        markdown: false,
        stream: false
    }, (err, data) => {
        if(err != null) {
            console.log("Error:", err);
        } else {
            console.log("GPTI:", data);
        }
    });
  } catch (e) {
    console.error(e.message);
  }
}
run();
