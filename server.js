import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} from "./controllers/bookController.js";
import Books from "./models/booksSchema.js";

// Express app
const app = express();
dotenv.config();

// Middleware
app.use(bodyParser.json());

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization !== "Bearer mytoken") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Express Router
const router = express.Router();

router
  .post("/books", authenticate, createBook)
  .get("/books", authenticate, getBooks);
router
  .get("/books/:id", authenticate, getBook)
  .put("/books/:id", authenticate, updateBook)
  .delete("/books/:id", authenticate, deleteBook);

// Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
