import { createContext, useContext, useState } from "react";

const ReviewContext = createContext();

export function ReviewProvider({ children }) {
  const [category, setCategory] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [review, setReview] = useState("");

  const resetAll = () => {
    setCategory("");
    setKeywords([]);
    setSelectedKeyword("");
    setReview("");
  };

  return (
    <ReviewContext.Provider
      value={{
        category,
        setCategory,
        keywords,
        setKeywords,
        selectedKeyword,
        setSelectedKeyword,
        review,
        setReview,
        resetAll,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
}

export function useReview() {
  return useContext(ReviewContext);
}
