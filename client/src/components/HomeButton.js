import { useNavigate } from "react-router-dom";
import { useReview } from "../context/ReviewContext";

function HomeButton() {
  const navigate = useNavigate();
  const { resetAll } = useReview();

  const handleHomeClick = () => {
    resetAll();              // clear category, keywords, review
    navigate("/");           // go to Home.js
  };

  return (
    <button
      onClick={handleHomeClick}
      style={{
        position: "absolute",
        top: "15px",
        left: "15px",
        padding: "8px 16px",
        backgroundColor: "#222",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}
    >
      Home
    </button>
  );
}

export default HomeButton;
