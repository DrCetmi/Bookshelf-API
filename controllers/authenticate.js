// import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function authenticateToken(req, res, next) {
  const token = process.env.SECRET_TOKEN;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication failed: Missing token" });
  }
  next();
}

export default authenticateToken;

// function authenticateUser(username, password) {
//   if (username === "user" && password === "password") {
//     return { username: "user" };
//   } else {
//     return null;
//   }
// }

// function generateToken(user) {
//   const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "1h" });
//   return token;
// }

// function authenticateToken(req, res, next) {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res
//       .status(401)
//       .json({ message: "Authentication failed: Missing token" });
//   }

//   jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
//     if (err) {
//       return res
//         .status(403)
//         .json({ message: "Authentication failed: Invalid token" });
//     }

//     req.user = user;
//     next();
//   });
// }

// export { authenticateToken, generateToken };
