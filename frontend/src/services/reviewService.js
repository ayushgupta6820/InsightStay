import API from "./api";

export const getPublicReviews = async () => {
  const res = await API.get("/reviews/public");
  return res.data.data;
};

export const getAllReviews = async () => {
  const response = await API.get("/reviews");
  return response.data;
};

export const searchReviews = async (query) => {
  const response = await API.get(`/reviews/search?q=${query}`);
  return response.data.data;
};

export const createReview = async (review) => {
  const response = await API.post("/reviews", review);
  return response.data.data;
};

export const updateReview = async (id, review) => {
  const response = await API.put(`/reviews/${id}`, review);
  return response.data.data;
};

export const deleteReview = async (id) => {
  await API.delete(`/reviews/${id}`);
};

export const getReviewById = async (id) => {
  const response = await API.get(`/reviews/${id}`);
  return response.data.data;
};