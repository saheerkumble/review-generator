function ReviewCard({ keyword, review, onRestart }) {
  return (
    <div style={{ marginTop: "30px", maxWidth: "600px", margin: "auto" }}>
      <h3>Review for "{keyword}"</h3>
      <p>{review}</p>
      <button onClick={onRestart}>Start Over</button>
    </div>
  );
}
export default ReviewCard;
