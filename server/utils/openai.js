/*
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

export const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

*/

import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateAIReview() {
  const prompt =
    "Generate a 5 to 6 sentence friendly and positive customer review for a Royal Enfield motorcycle dealership experience. Keep it simple and natural.";

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7
  });

  return response.choices[0].message.content;
}
