import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

async function run() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: "Hello",
      config: { systemInstruction: "You are a helpful assistant." }
    });
    console.log(response.text);
  } catch (e) {
    console.error(e.message);
  }
}
run();
