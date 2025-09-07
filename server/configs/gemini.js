// configs/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// API key .env dosyandan geliyor
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);

    // response içinden text alıyoruz
    return result.response.text();
  } catch (error) {
    console.error("Gemini API error:", error);
    throw new Error(error.message);
  }
}

export default main;
