require("dotenv").config();
const rateLimit = require("express-rate-limit");
const authRoutes=require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("./config/passport");

const connectDB = require("./config/database");

const reviewRoutes = require("./routes/reviewRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
const authLimiter = rateLimit({

    windowMs: 60 * 1000,

    max: 5,

    message: {

        success: false,

        message: "Too many authentication attempts. Please try again after 15 minutes."

    }

});

app.use("/api/reviews", reviewRoutes);
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/ai", aiRoutes);

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