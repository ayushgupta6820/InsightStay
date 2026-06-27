const reviews = require("../data/reviews");

// GET all reviews
const getAllReviews = (req, res) => {
  res.status(200).json(reviews);
};

// GET review by ID
const getReviewById = (req, res) => {
  const id = Number(req.params.id);

  const review = reviews.find((r) => r.id === id);

  if (!review) {
    return res.status(404).json({
      message: "Review not found",
    });
  }

  res.status(200).json(review);
};

// POST new review
const createReview = (req, res) => {
  const { guest, hotel, review, sentiment } = req.body;

  if (!guest || !hotel || !review || !sentiment) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const newReview = {
    id: reviews.length + 1,
    guest,
    hotel,
    review,
    sentiment,
  };

  reviews.push(newReview);

  res.status(201).json(newReview);
};

// PUT update review
const updateReview = (req, res) => {
  const id = Number(req.params.id);

  const reviewItem = reviews.find((r) => r.id === id);

  if (!reviewItem) {
    return res.status(404).json({
      message: "Review not found",
    });
  }

  reviewItem.guest = req.body.guest || reviewItem.guest;
  reviewItem.hotel = req.body.hotel || reviewItem.hotel;
  reviewItem.review = req.body.review || reviewItem.review;
  reviewItem.sentiment = req.body.sentiment || reviewItem.sentiment;

  res.status(200).json(reviewItem);
};

// DELETE review
const deleteReview = (req, res) => {
  const id = Number(req.params.id);

  const index = reviews.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Review not found",
    });
  }

  reviews.splice(index, 1);

  res.status(204).send();
};

// SEARCH reviews
const searchReviews = (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const results = reviews.filter(
    (r) =>
      r.guest.toLowerCase().includes(query) ||
      r.hotel.toLowerCase().includes(query) ||
      r.review.toLowerCase().includes(query) ||
      r.sentiment.toLowerCase().includes(query)
  );

  res.status(200).json(results);
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews,
};