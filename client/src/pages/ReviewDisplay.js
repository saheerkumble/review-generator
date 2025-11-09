import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { getReview } from "../services/api";
import { useReview } from "../context/ReviewContext";
import HomeButton from "../components/HomeButton";

function ReviewDisplay() {
  const { category, keyword } = useParams();
  const navigate = useNavigate();
  const { review, setReview } = useReview();

  useEffect(() => {
    const fetchReview = async () => {
      if (!review) {
        const text = await getReview(category, keyword);
        setReview(text);
      }
    };
    fetchReview();
  }, [category, keyword, review, setReview]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <HomeButton/>
        {review && (
            <ReviewCard
            keyword={keyword}
            review={review}
            onRestart={() => navigate("/category")}
            />
      )}
    </div>
  );
}

export default ReviewDisplay;
