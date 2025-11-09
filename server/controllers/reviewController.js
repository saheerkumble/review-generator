import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/reviews.json");

// Helper function to read JSON safely
const readData = () => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
  } catch {
    return {};
  }
};

// GET keywords for a category
export const getKeywordsByCategory = (req, res) => {
  const { category } = req.params;
  const data = readData();
  const keywords = Object.keys(data[category] || {});
  if (keywords.length === 0) return res.status(404).json({ error: "Category not found" });
  res.json({ keywords });
};

// GET review for a category and keyword
export const getReviewByCategoryAndKeyword = (req, res) => {
  const { category, keyword } = req.params;
  const data = readData();
  const review = data[category]?.[keyword];
  if (!review) return res.status(404).json({ error: "Review not found" });
  res.json({ review });
};
