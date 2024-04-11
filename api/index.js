import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed: ", err);
  });
