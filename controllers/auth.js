import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Authentication failed" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};
