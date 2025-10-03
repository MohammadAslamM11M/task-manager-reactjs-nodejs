const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  debugger;
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // You can access this in protected routes
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
