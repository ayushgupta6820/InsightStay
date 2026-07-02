const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    guest: {
      type: String,
      required: true,
      trim: true,
    },

    hotel: {
      type: String,
      required: true,
      trim: true,
    },

    review: {
      type: String,
      required: true,
      trim: true,
    },

    sentiment: {
      type: String,
      required: true,
      enum: ["Positive", "Neutral", "Negative"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);