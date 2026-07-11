const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  register,
  login
} = require("../controllers/authController");

const {
  registerValidation,
  loginValidation,
  validate
} = require("../middleware/validation");

router.post(
  "/register",
  registerValidation,
  validate,
  register
);

router.post(
  "/login",
  loginValidation,
  validate,
  login
);
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {

    const token = req.user.token;

    res.redirect(`http://localhost:5173/login?token=${token}`);

  }
);
module.exports = router;