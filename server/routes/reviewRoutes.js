import express from "express";
import {
  getKeywordsByCategory,
  getReviewByCategoryAndKeyword
} from "../controllers/reviewController.js";

const router = express.Router();

// GET /api/keywords/:category
router.get("/keywords/:category", getKeywordsByCategory);

// GET /api/review/:category/:keyword
router.get("/review/:category/:keyword", getReviewByCategoryAndKeyword);

export default router;
