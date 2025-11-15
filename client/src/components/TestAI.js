import { useState } from "react";

function TestAI() {
  const [review, setReview] = useState("");
  const [showReview, setShowReview] = useState(false);

  const generateReview = async () => {
    setReview("Loading...");

    const res = await fetch("http://localhost:5000/api/ai/generate-review", {
      method: "GET"
    });

    const data = await res.json();
    setReview(data.review);
    setShowReview(true);
  };

  const reset = () => {
    setReview("");
    setShowReview(false);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      {!showReview && (
        <button
          style={{ padding: "10px 20px" }}
          onClick={generateReview}
        >
          Generate Random Review
        </button>
      )}

      {showReview && (
        <div style={{ marginTop: "30px" }}>
          <h3>Generated Review</h3>
          <p style={{ marginTop: "20px", fontSize: "18px" }}>{review}</p>

          <button
            style={{ marginTop: "40px", padding: "10px 20px" }}
            onClick={reset}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default TestAI;
