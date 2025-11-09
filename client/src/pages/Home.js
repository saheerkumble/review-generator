import { useState } from "react";
import CategoryButtons from "../components/CategoryButtons";
import KeywordButtons from "../components/KeywordButtons";
import ReviewCard from "../components/ReviewCard";
import { getKeywords, getReview } from "../services/api";

function Home() {
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [review, setReview] = useState("");

  const handleCategorySelect = async (cat) => {
    setCategory(cat);
    setReview("");
    setSelectedKeyword("");
    const list = await getKeywords(cat);
    setKeywords(list);
  };

  const handleKeywordSelect = async (keyword) => {
    setSelectedKeyword(keyword);
    const text = await getReview(category, keyword);
    setReview(text);
  };

  const resetAll = () => {
    setCategory("");
    setSelectedKeyword("");
    setReview("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h2>Vibrant Motocorp Review Generator (Demo)</h2>

      {!category && <CategoryButtons onSelect={handleCategorySelect} />}

      {category && !selectedKeyword && !review && (
        <KeywordButtons keywords={keywords} onSelect={handleKeywordSelect} onBack={resetAll} />
      )}

      {review && (
        <ReviewCard keyword={selectedKeyword} review={review} onRestart={resetAll} />
      )}
    </div>
  );
}

export default Home;
