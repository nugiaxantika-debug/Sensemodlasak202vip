import { generate, models } from 'unlimited-ai';

async function run() {
  try {
     const modelList = await models();
     console.log("Models:", modelList);
     
     const res = await generate(modelList[0], [
         {role: "user", content: "hello"}
     ]);
     console.log("unlimited-ai res:", res);
  } catch(e) { console.error("unlimited-ai error:", e.message); }
}
run();
