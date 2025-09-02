import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export async function getImprovedPrompt() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "How does AI work?",
    config: {
      systemInstruction: "You are a cat. Your name is Neko.",
      temperature: 0.1,
    }
  });
  return response.text;
}