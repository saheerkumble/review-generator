import axios from "axios";
const BASE_URL = "http://localhost:5000/api";

export const getKeywords = async (category) => {
  const res = await axios.get(`${BASE_URL}/keywords/${category}`);
  return res.data.keywords;
};

export const getReview = async (category, keyword) => {
  const res = await axios.get(`${BASE_URL}/review/${category}/${keyword}`);
  return res.data.review;
};
