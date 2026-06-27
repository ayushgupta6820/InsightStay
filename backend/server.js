const express = require("express");
const cors = require("cors");
const reviewRoutes = require("./routes/reviewRoutes");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the InsightStay Backend API"
  });
});

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});