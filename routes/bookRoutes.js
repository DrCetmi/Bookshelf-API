import express from "express";
import {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

import authenticateToken from "../controllers/authenticate.js";

const router = express.Router();

router
  .route("/")
  .post(authenticateToken, createBook)
  .get(authenticateToken, getBooks);
router
  .route("/:id")
  .get(authenticateToken, getBook)
  .put(authenticateToken, updateBook)
  .delete(authenticateToken, deleteBook);

export default router;
