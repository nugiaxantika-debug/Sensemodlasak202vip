const ai = require('unlimited-ai');
async function run() {
  try {
     const models = await ai.models();
     console.log("Models:", models);
     
     const res = await ai.generate(models[0], [
         {role: "user", content: "hello"}
     ]);
     console.log("unlimited-ai res:", res);
  } catch(e) { console.error("unlimited-ai error:", e.message); }
}
run();
