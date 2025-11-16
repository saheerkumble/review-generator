/*
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function GenerateReview() {
  const location = useLocation();
  const navigate = useNavigate();

  const { category, selectedKeywords } = location.state || {};
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(true);
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current) return; // skip second call in StrictMode
    effectRan.current = true;

    if (!category || !selectedKeywords) {
        console.log("reached here. navigating to categories");
      navigate("/categories"); 
      return;
    }
    //console.log(selectedKeywords);
    const fetchReview = async () => {
      try {
        //console.log("Inside TRY loop")
        const response = await fetch("/api/ai/generate-review", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            category,
            selectedKeywords
          })
        });
        
        const data = await response.json();

        if (data.review) {
          setReview(data.review);
        } else {
          setReview("Error generating review. Please try again.");
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setReview("Something went wrong. Try again.");
        setLoading(false);
      }
    };

    fetchReview();
  }, [category, selectedKeywords, navigate]);

  const handleRestart = () => {
    navigate("/categories");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "50px auto", padding: "20px" }}>
      <h2>AI Generated Review</h2>

      
      {loading && <p>Generating your personalized review… Please wait.</p>} //loading spinner

      //show review
      {!loading && (
        <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
          <p>{review}</p>
        </div>
      )}

     //restart button
      {!loading && (
        <button
          onClick={handleRestart}
          style={{
            marginTop: "25px",
            padding: "12px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Start Over
        </button>
      )}
    </div>
  );
}

export default GenerateReview;
*/

import { useLocation, useNavigate } from "react-router-dom";
import ReviewGenerator from "../components/ReviewGenerator";

function GenerateReviewPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { category, selectedKeywords } = location.state || {};

  const handleRestart = () => {
    navigate("/categories");
  };

  // Redirect if no category or keywords
  if (!category || !selectedKeywords) {
    navigate("/categories");
    return null; // render nothing while redirecting
  }

  return (
    <ReviewGenerator
      category={category}
      selectedKeywords={selectedKeywords}
      onRestart={handleRestart}
    />
  );
}

export default GenerateReviewPage;
