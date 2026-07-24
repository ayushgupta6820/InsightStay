const Review = require("../models/Review");

// GET all reviews
const getAllReviews = async (req, res) => {

  try {

    const reviews = await Review.find({
  user: req.user.id,
}).sort({ createdAt: -1 });

    res.status(200).json(reviews);

  }

  catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

const getPublicReviews = async (req, res) => {

  try {

    const reviews = await Review.find();

    res.status(200).json({
      success: true,
      data: reviews
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};
// GET review by ID
const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// POST new review
const createReview = async (req, res) => {
  try {
    const { guest, hotel, review, sentiment } = req.body;

    if (!guest || !hotel || !review || !sentiment) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newReview = await Review.create({
  guest,
  hotel,
  review,
  sentiment,
  user: req.user.id,
});

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: newReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// PUT update review
const updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findOneAndUpdate(

  {
    _id: req.params.id,
    user: req.user.id,
  },

  req.body,

  {
    new: true,
    runValidators: true,
  }

);
    if (!updatedReview) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: updatedReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE review
const deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findOneAndDelete({

  _id: req.params.id,

  user: req.user.id,

});

    if (!deletedReview) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// SEARCH reviews
const searchReviews = async (req, res) => {
  try {
    const query = req.query.q || "";

    const reviews = await Review.find({
  user: req.user.id,

  $or: [
    { guest: { $regex: query, $options: "i" } },
    { hotel: { $regex: query, $options: "i" } },
    { review: { $regex: query, $options: "i" } },
    { sentiment: { $regex: query, $options: "i" } },
  ],
});

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  
};
module.exports = {
  getPublicReviews,
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  searchReviews,
};