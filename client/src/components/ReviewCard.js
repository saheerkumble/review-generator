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


//Review in same tab
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


/*

//Review in separate tab

import React from "react";

function ReviewCard({ keyword, review, onRestart }) {
  const handleApprove = async () => {
    try {
      // Copy review to clipboard
      await navigator.clipboard.writeText(review);

      // Notify user
      alert("Your review has been copied. You’ll now be redirected to Google Reviews.");

      // Vibrant Motocorp Google Place ID
      const placeId = "ChIJgbAUH3ODpDsResgfw4KMSqw";
      const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

      // Try opening in a new tab first
      const newTab = window.open(googleReviewUrl, "_blank");

      // If popup is blocked or fails to open, show fallback link
      setTimeout(() => {
        if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
          alert(
            "If the Google review form did not open automatically, click OK to open it manually."
          );
          window.location.href = googleReviewUrl;
        }
      }, 1500);
    } catch (err) {
      console.error("Failed to copy review text:", err);
      alert("Could not copy review to clipboard. Please copy it manually before proceeding.");
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

      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <button onClick={onRestart}>Start Over</button>
        <button onClick={handleApprove}>Approve</button>
      </div>

      <p style={{ marginTop: "15px", fontSize: "14px", color: "gray" }}>
        (Your review is copied automatically. If the Google review form doesn’t open, please click the link again or paste your review manually.)
      </p>
    </div>
  );
}

export default ReviewCard;
*/
/*
//Review in pop-up

import React from "react";

function ReviewCard({ keyword, review, onRestart }) {
  const handleApprove = async () => {
    try {
      // Copy the review text to clipboard
      await navigator.clipboard.writeText(review);

      alert("Your review has been copied. A Google Review window will open now.");

      const placeId = "ChIJgbAUH3ODpDsResgfw4KMSqw"; // Vibrant Motocorp Place ID
      const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

      // Open Google Review in a centered popup
      const width = 600;
      const height = 700;
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;

      const popup = window.open(
        googleReviewUrl,
        "GoogleReviewPopup",
        `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=no`
      );

      if (!popup) {
        alert("Popup blocked! Please allow popups for this site and try again.");
        return;
      }

      // Optionally, monitor if popup closes to show a thank-you message
      const popupCheck = setInterval(() => {
        if (popup.closed) {
          clearInterval(popupCheck);
          alert("Thank you for submitting your review!");
        }
      }, 1000);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
      alert("Could not copy review text. Please copy manually before proceeding.");
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

      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <button onClick={onRestart}>Start Over</button>
        <button onClick={handleApprove}>Approve</button>
      </div>
    </div>
  );
}

export default ReviewCard;
*/