const botz = require('betabotz-tools');
async function run() {
  try {
     const res = await botz.openai("hello");
     console.log("botz openai:", res);
  } catch(e) { console.error("botz error:", e.message); }
}
run();
