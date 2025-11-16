import { useState } from "react";
import { useNavigate } from "react-router-dom";

const keywords = {
  sales: [
    "Friendly Staff",
    "Professional Behaviour",
    "Knowledgeable Sales Team",
    "Helpful Guidance",
    "Smooth Delivery Experience",
    "Quick Delivery",
    "Hassle-Free Purchase",
    "On-Time Delivery",
    "Finance Assistance",
    "Exchange Assistance",
    "Excellent Showroom Ambience",
    "Test Ride Experience",
    "Product Explanation",
    "Customisation Guidance",
    "Accessories Support",
    "Transparent Pricing",
    "Easy Documentation",
    "Loan Processing Support",
    "Insurance Support"
  ],
  service: [
    "Quick Service",
    "Quality Service",
    "Effective Repairs",
    "Problem Resolved",
    "Bike Performance Improved",
    "Genuine Spares Used",
    "Friendly Service Advisor",
    "Professional Technicians",
    "Clear Explanation of Issues",
    "Regular Updates Provided",
    "Fast Delivery",
    "Same-Day Service",
    "On-Time Service Delivery",
    "Smooth Service Process",
    "Good Waiting Area",
    "Pick-Up & Drop Service",
    "Appointment Convenience",
    "Service Follow-Up Calls",
    "Reasonable Charges",
    "Transparent Billing",
    "Good Service Offers",
    "Service Package Benefits"
  ]
};

function CategoriesSelect() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setSelectedKeywords([]); // reset on category change
  };

  const handleKeywordToggle = (keyword) => {
    const alreadySelected = selectedKeywords.includes(keyword);

    if (!alreadySelected && selectedKeywords.length === 5) {
      alert("You can select only 5 keywords.");
      return;
    }

    if (alreadySelected) {
      setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
    } else {
      setSelectedKeywords([...selectedKeywords, keyword]);
    }
  };

  const handleContinue = () => {
    // Pass the selected keywords to the next step (AI prompt page)
    navigate("/generate-review", { state: { category, selectedKeywords } });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h2>Select Category</h2>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => handleCategorySelect("sales")}
          style={{
            padding: "12px 20px",
            marginRight: "10px",
            background: category === "sales" ? "#1976d2" : "#999",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "6px"
          }}
        >
          Sales
        </button>

        <button
          onClick={() => handleCategorySelect("service")}
          style={{
            padding: "12px 20px",
            background: category === "service" ? "#1976d2" : "#999",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "6px"
          }}
        >
          Service
        </button>
      </div>

      {category && (
        <>
          <h3 style={{ marginTop: "30px" }}>
            Select 5 keywords for {category.toUpperCase()}
          </h3>

          <div style={{ marginTop: "15px" }}>
            {keywords[category].map((key) => (
              <label
                key={key}
                style={{
                  display: "block",
                  marginBottom: "10px",
                  cursor: "pointer",
                  fontSize: "16px"
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedKeywords.includes(key)}
                  onChange={() => handleKeywordToggle(key)}
                  style={{ marginRight: "8px" }}
                />
                {key}
              </label>
            ))}
          </div>

          <button
            onClick={handleContinue}
            disabled={selectedKeywords.length !== 5}
            style={{
                marginTop: "25px",
                padding: "12px 20px",
                width: "100%",
                background: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                opacity: selectedKeywords.length !== 5 ? 0.5 : 1
            }}
            >
            Continue (Select exactly 5)
          </button>
        </>
      )}
    </div>
  );
}

export default CategoriesSelect;
