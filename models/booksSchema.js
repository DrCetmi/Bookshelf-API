import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
  },
  published_date: {
    type: Date,
    required: true,
  },
});

const Books = mongoose.model("Books", booksSchema);

export default Books;
