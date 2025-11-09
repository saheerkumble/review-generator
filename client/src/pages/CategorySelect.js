import CategoryButtons from "../components/CategoryButtons";
import { useNavigate } from "react-router-dom";
import { useReview } from "../context/ReviewContext";
import HomeButton from "../components/HomeButton";

function CategorySelect() {
  const navigate = useNavigate();
  const { setCategory, resetAll } = useReview();

  const handleCategorySelect = (cat) => {
    resetAll();
    setCategory(cat);
    navigate(`/keywords/${cat}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
        <HomeButton/>
        <h2>Select Category</h2>
        <CategoryButtons onSelect={handleCategorySelect} />
    </div>
  );
}

export default CategorySelect;
