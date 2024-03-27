import { Router } from "express";
import {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";
import { authenticate } from "../controllers/auth.js";

const router = new Router();

router
  .post("/books", authenticate, createBook)
  .get("/books", authenticate, getBooks);
router
  .get("/books/:id", authenticate, getBook)
  .put("/books/:id", authenticate, updateBook)
  .delete("/books/:id", authenticate, deleteBook);

export default router;
