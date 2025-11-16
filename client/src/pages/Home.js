/*
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
*/
/*
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome to Vibrant Motocorp Review Generator</h2>
      <button onClick={() => navigate("/category")}>Start</button>
    </div>
  );
}

export default Home;

*/

import LoginButton from "../components/LoginButton";
//import TestAI from "../components/TestAI";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Welcome to Vibrant Motocorp Review Generator</h2>
      <p>Please sign in with Google to continue.</p>
      <div style={{ marginTop: "30px" }}>
        <LoginButton />
      </div>
    </div>
  );
}

export default Home;
