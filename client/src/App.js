/*
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [serverMessage, setServerMessage] = useState("Connecting...");

  useEffect(() => {
    axios.get("http://localhost:5000/api/ping")
      .then(res => setServerMessage(res.data.message))
      .catch(() => setServerMessage("Failed to connect to server"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h2>{serverMessage}</h2>
    </div>
  );
}

export default App;
*/
/*
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [review, setReview] = useState("");

  const handleCategorySelect = async (cat) => {
    setCategory(cat);
    setReview("");
    setSelectedKeyword("");
    const res = await axios.get(`http://localhost:5000/api/keywords/${cat}`);
    setKeywords(res.data.keywords);
  };

  const handleKeywordSelect = async (keyword) => {
    setSelectedKeyword(keyword);
    const res = await axios.get(`http://localhost:5000/api/review/${category}/${keyword}`);
    setReview(res.data.review);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h2>Vibrant Motocorp Review Generator (Demo)</h2>

      {!category && (
        <>
          <p>Select a category:</p>
          <button onClick={() => handleCategorySelect("sales")}>Sales</button>
          <button onClick={() => handleCategorySelect("service")}>Service</button>
        </>
      )}

      {category && !selectedKeyword && (
        <>
          <h3>{category.toUpperCase()} Keywords</h3>
          {keywords.map((k) => (
            <button key={k} style={{ margin: "5px" }} onClick={() => handleKeywordSelect(k)}>
              {k}
            </button>
          ))}
          <div style={{ marginTop: "20px" }}>
            <button onClick={() => setCategory("")}>Back</button>
          </div>
        </>
      )}

      {review && (
        <div style={{ marginTop: "30px", maxWidth: "600px", margin: "auto" }}>
          <h3>Review for "{selectedKeyword}"</h3>
          <p>{review}</p>
          <button onClick={() => setCategory("")}>Start Over</button>
        </div>
      )}
    </div>
  );
}

export default App;
*/
/*
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
*/
/*
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategorySelect from "./pages/CategorySelect";
import KeywordSelect from "./pages/KeywordSelect";
import ReviewDisplay from "./pages/ReviewDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategorySelect />} />
        <Route path="/keywords/:category" element={<KeywordSelect />} />
        <Route path="/review/:category/:keyword" element={<ReviewDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
*/

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReviewProvider } from "./context/ReviewContext";
import Home from "./pages/Home";
import CategorySelect from "./pages/CategorySelect";
import KeywordSelect from "./pages/KeywordSelect";
import ReviewDisplay from "./pages/ReviewDisplay";

function App() {
  return (
    <ReviewProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<CategorySelect />} />
          <Route path="/keywords/:category" element={<KeywordSelect />} />
          <Route path="/review/:category/:keyword" element={<ReviewDisplay />} />
        </Routes>
      </Router>
    </ReviewProvider>
  );
}

export default App;
