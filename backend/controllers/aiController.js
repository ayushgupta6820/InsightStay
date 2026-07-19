const { analyzeReview } = require("../services/huggingFaceService");

const analyze = async (req, res) => {
  try {
    const { review } = req.body;

    if (!review) {
      return res.status(400).json({
        success: false,
        message: "Review is required",
      });
    }

    const result = await analyzeReview(review);

    res.status(200).json({
      success: true,
      analysis: result,
    });

  } catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: error.response?.data || error.message,
    });
  }
};

module.exports = {
  analyze,
};