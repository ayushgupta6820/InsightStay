const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

const login = async (req, res) => {
  console.log("Login API called");
    try {
            const { email, password } = req.body;
            if (!email || !password) {

    return res.status(400).json({

        success:false,

        message:"Email and Password are required"

    });

}
    const user = await User.findOne({ email });
    if(!user){

    return res.status(401).json({

        success:false,

        message:"Invalid Email or Password"

    });

}
const isMatch = await bcrypt.compare(

    password,

    user.password

);
if(!isMatch){

    return res.status(401).json({

        success:false,

        message:"Invalid Email or Password"

    });

}
console.log(process.env.JWT_SECRET);
const token = jwt.sign(

    {

        id:user._id,

        email:user.email

    },

    process.env.JWT_SECRET,

    {

        expiresIn:process.env.JWT_EXPIRE

    }

);
res.status(200).json({

    success:true,

    message:"Login Successful",

    token

});
    }

    catch (error) {

  console.log(error);

  console.log(error.response);

  console.log(error.response?.data);

  setError(

    error.response?.data?.message ||

    "Login Failed"

  );

}

};

module.exports = {
  register,
  login
};