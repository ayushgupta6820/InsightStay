const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/database");

const reviewRoutes = require("./routes/reviewRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the InsightStay Backend API",
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});