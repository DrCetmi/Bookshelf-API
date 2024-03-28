import express from "express";
import {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

import { authenticate } from "../controllers/auth.js";

const router = express.Router();

router
  .route("/books")
  .post(authenticate, createBook)
  .get(authenticate, getBooks);
router
  .route("/books/:id")
  .get(authenticate, getBook)
  .put(authenticate, updateBook)
  .delete(authenticate, deleteBook);

export default router;
