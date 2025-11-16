/*
//route without keywords
import express from "express";
import { generateAIReview } from "../utils/openai.js";

const router = express.Router();

router.get("/generate-review", async (req, res) => {
  try {
    const review = await generateAIReview();
    res.json({ review });
  } catch (err) {
    //console.error("AI ERROR:", err);   // <-- add this to check error if needed
    res.status(500).json({ error: "Error generating review" });
  }
});

export default router;
*/


//route with keywords
import express from "express";
import { generateAIReview } from "../utils/openai.js";

const router = express.Router();

router.post("/generate-review", async (req, res) => {
  //console.log("HIT BACKEND:", req.body);
  try {
    const { category, selectedKeywords } = req.body;

    if (!category || !selectedKeywords || selectedKeywords.length !== 5) {
      return res.status(400).json({
        error: "Category and exactly 5 selected keywords are required."
      });
    }

    const review = await generateAIReview(category, selectedKeywords);

    res.json({ review });
  } catch (err) {
    //console.error("AI Review Generation Error:", err);
    res.status(500).json({ error: "Error generating review" });
  }
});

export default router;

/*
//route with keywords and multiple tries
import express from "express";
import { generateAIReview } from "../utils/openai.js";

const router = express.Router();

async function tryGenerateReview(category, selectedKeywords, retries = 1) {
  for (let i = 0; i <= retries; i++) {
    try {
      const review = await generateAIReview(category, selectedKeywords);
      if (review && review.trim()) return review; // successful
    } catch (err) {
      console.warn(`Attempt ${i + 1} failed:`, err.message);
    }
  }
  throw new Error("Failed to generate review after retries");
}

router.post("/generate-review", async (req, res) => {
  try {
    const { category, selectedKeywords } = req.body;
    if (!category || !selectedKeywords || selectedKeywords.length !== 5) {
      return res.status(400).json({ error: "Category and exactly 5 selected keywords are required." });
    }

    const review = await tryGenerateReview(category, selectedKeywords, 1); // retry once
    res.json({ review });
  } catch (err) {
    console.error("AI Review Generation Error:", err);
    res.status(500).json({ error: "Error generating review" });
  }
});
*/