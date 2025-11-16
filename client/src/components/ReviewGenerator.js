import { useEffect, useRef, useState } from "react";
import GoogleReview from "./GoogleReview";

function ReviewGenerator({ category, selectedKeywords, onRestart }) {
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(true);
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current) return; // skip second call in StrictMode
    effectRan.current = true;

    if (!category || !selectedKeywords) {
      setReview("Invalid category or keywords."); // optional fallback
      setLoading(false);
      return;
    }

    const fetchReview = async () => {
      try {
        const response = await fetch("/api/ai/generate-review", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ category, selectedKeywords })
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
  }, [category, selectedKeywords]);

  return (
    <div style={{ maxWidth: "700px", margin: "50px auto", padding: "20px" }}>
      <h2>AI Generated Review</h2>

      {loading && <p>Generating your personalized review… Please wait.</p>}

      {!loading && (
        <>
          <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
            <p>{review}</p>
          </div>
          <button
            onClick={onRestart}
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
          <GoogleReview review={review} />
        </>
      )}
    </div>
  );
}

export default ReviewGenerator;
