/*
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/ping", (req, res) => {
  res.json({ message: "Successfully connected to server" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
/*
import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/keywords/:category", (req, res) => {
  const { category } = req.params;
  const data = JSON.parse(fs.readFileSync("./data/reviews.json", "utf-8"));
  const keywords = Object.keys(data[category] || {});
  res.json({ keywords });
});

app.get("/api/review/:category/:keyword", (req, res) => {
  const { category, keyword } = req.params;
  const data = JSON.parse(fs.readFileSync("./data/reviews.json", "utf-8"));
  const review = data[category]?.[keyword] || "No review found.";
  res.json({ review });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/

import express from "express";
import cors from "cors";
import reviewRoutes from "./routes/reviewRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
