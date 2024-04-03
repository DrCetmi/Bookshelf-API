import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/bookRoutes.js";
dotenv.config();
// Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/books", router);

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    const port = process.env.PORT || 8001;

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

export default app;
