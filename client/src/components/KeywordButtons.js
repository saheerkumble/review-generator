function KeywordButtons({ keywords, onSelect, onBack }) {
  return (
    <div>
      <h3>Select a keyword</h3>
      {keywords.map((k) => (
        <button key={k} style={{ margin: "5px" }} onClick={() => onSelect(k)}>
          {k}
        </button>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
}
export default KeywordButtons;
