/*
//Google review in same tab
function GoogleReview({ review }) {
  const handleApprove = async () => {
    try {
      if (!review) {
        alert("No review to copy.");
        return;
      }

      // Copy review to clipboard
      await navigator.clipboard.writeText(review);

      // Optional feedback
      alert("Your review has been copied. You’ll now be redirected to Google Reviews.");

      // Vibrant Motocorp Place ID
      const placeId = "ChIJgbAUH3ODpDsResgfw4KMSqw";
      const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

      // Redirect
      window.location.href = googleReviewUrl;
    } catch (err) {
      alert("Could not copy review to clipboard. Please copy manually.");
      console.error("Clipboard error:", err);
    }
  };

  return (
    <button
      onClick={handleApprove}
      style={{
        marginTop: "15px",
        marginLeft: "10px",
        padding: "12px 20px",
        background: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      Approve
    </button>
  );
}

export default GoogleReview;
*/


//Google Review in new tab
function GoogleReview({ review, onReviewClosed }) {
  const handleApprove = async () => {
    try {
      if (!review) {
        alert("No review to copy.");
        return;
      }

      // Copy review to clipboard
      await navigator.clipboard.writeText(review);

      // Optional feedback
      alert("Your review has been copied. Google Reviews will open in a new tab.");

      // Vibrant Motocorp Place ID
      const placeId = "ChIJgbAUH3ODpDsResgfw4KMSqw";
      const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

      // Open Google Review in a new tab
      const reviewWindow = window.open(googleReviewUrl, "_blank");

      // Poll to check when the user closes the tab
      const checkClosed = setInterval(() => {
        if (reviewWindow.closed) {
          clearInterval(checkClosed);
          // Trigger callback if provided
          if (onReviewClosed) onReviewClosed();
          alert("Welcome back! You can now claim your coupon.");
        }
      }, 500);

    } catch (err) {
      alert("Could not copy review to clipboard. Please copy manually.");
      console.error("Clipboard error:", err);
    }
  };

  return (
    <button
      onClick={handleApprove}
      style={{
        marginTop: "15px",
        marginLeft: "10px",
        padding: "12px 20px",
        background: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      Approve
    </button>
  );
}

export default GoogleReview;
