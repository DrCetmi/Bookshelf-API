import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/bookRoutes.js";

// Express app
const app = express();
dotenv.config();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/books", router);

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    const port = process.env.PORT || 8000;

    app.listen(port, () => {
      // console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

export default app;
