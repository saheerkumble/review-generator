function CategoryButtons({ onSelect }) {
  return (
    <div>
      <p>Select a category:</p>
      <button onClick={() => onSelect("sales")}>Sales</button>
      <button onClick={() => onSelect("service")}>Service</button>
    </div>
  );
}
export default CategoryButtons;
