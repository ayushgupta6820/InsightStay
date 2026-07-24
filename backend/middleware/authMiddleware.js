const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {

        return res.status(401).json({
            success: false,
            message: "Access denied. No token provided."
        });

    }

    const token = authHeader.split(" ")[1];
    console.log(token);

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        console.log("Decoded User:", decoded);

        req.user = decoded;

        next();

    } catch (error) {

    console.log(error);

    return res.status(401).json({
        success: false,
        message: "Invalid or expired token."
    });



    }

};

module.exports = verifyToken;