/*
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

export const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

*/

/*
//prompt for open ai API without keywords
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
    model: "gpt-5.1",  //gpt-4o-mini
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7
  });

  return response.choices[0].message.content;
}
*/

//prompt for openai API with keywords
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// category = "sales" or "service"
// selectedKeywords = array of 5 keywords
export async function generateAIReview(category, selectedKeywords) {
  const keywordList = selectedKeywords.join(", ");

  const prompt = `
Generate a friendly and positive 5–6 sentence upto 50 words customer review for a Royal Enfield dealership experience.
The experience category is: ${category.toUpperCase()}.
Incorporate the synonyms of the following ALL 5 keywords naturally and meaningfully into the review: ${keywordList}.
Keep the review simple, conversational, and genuine. Do not list keywords. Write as a real customer.
  `;

  const response = await client.chat.completions.create({
    model: "gpt-5.1",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7
  });

  return response.choices[0].message.content;
}
