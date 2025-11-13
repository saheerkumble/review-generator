/*function ReviewCard({ keyword, review, onRestart }) {
  return (
    <div style={{ marginTop: "30px", maxWidth: "600px", margin: "auto" }}>
      <h3>Review for "{keyword}"</h3>
      <p>{review}</p>
      <button onClick={onRestart}>Start Over</button>
    </div>
  );
}
export default ReviewCard;
*/

import React from "react";

function ReviewCard({ keyword, review, onRestart }) {
  const handleApprove = async () => {
    try {
      // Copy review to clipboard
      await navigator.clipboard.writeText(review);

      // Optional user feedback
      alert("Your review has been copied. You’ll now be redirected to Google Reviews.");

      // Replace this with your actual Place ID
      const placeId = "ChIJgbAUH3ODpDsResgfw4KMSqw"; // <-- Vibrant Motocorp Place ID
      const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

      // Redirect
      window.location.href = googleReviewUrl;
    } catch (err) {
      console.error("Failed to copy review text:", err);
      alert("Could not copy review to clipboard. Please copy manually.");
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
        maxWidth: "600px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h3>Review for "{keyword}"</h3>
      <p style={{ marginTop: "15px", whiteSpace: "pre-line" }}>{review}</p>

      <div style={{ marginTop: "25px", display: "flex", justifyContent: "center", gap: "15px" }}>
        <button onClick={onRestart}>Start Over</button>
        <button onClick={handleApprove}>Approve</button>
      </div>
    </div>
  );
}

export default ReviewCard;
