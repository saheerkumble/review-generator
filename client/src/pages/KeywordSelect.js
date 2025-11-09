import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import KeywordButtons from "../components/KeywordButtons";
import { getKeywords } from "../services/api";
import { useReview } from "../context/ReviewContext";
import HomeButton from "../components/HomeButton";

function KeywordSelect() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { keywords, setKeywords, setSelectedKeyword } = useReview();

  useEffect(() => {
    const fetchKeywords = async () => {
      if (!keywords.length) {
        const list = await getKeywords(category);
        setKeywords(list);
      }
    };
    fetchKeywords();
  }, [category, keywords, setKeywords]);

  const handleKeywordSelect = (keyword) => {
    setSelectedKeyword(keyword);
    navigate(`/review/${category}/${keyword}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <HomeButton/>
        <h2>{category.toUpperCase()} Keywords</h2>
        <KeywordButtons
            keywords={keywords}
            onSelect={handleKeywordSelect}
            onBack={() => navigate("/category")}
      />
    </div>
  );
}

export default KeywordSelect;
