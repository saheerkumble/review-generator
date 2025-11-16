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
