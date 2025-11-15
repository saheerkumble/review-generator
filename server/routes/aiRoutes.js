import express from "express";
import { generateAIReview } from "../utils/openai.js";

const router = express.Router();

/*
router.get("/generate-review", async (req, res) => {
  try {
    const review = await generateAIReview();
    res.json({ review });
  } catch (err) {
    res.status(500).json({ error: "Error generating review" });
  }
});
*/

router.get("/generate-review", async (req, res) => {
  try {
    const review = await generateAIReview();
    res.json({ review });
  } catch (err) {
    console.error("AI ERROR:", err);   // <-- add this
    res.status(500).json({ error: "Error generating review" });
  }
});

export default router;
