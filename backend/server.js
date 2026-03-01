import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = 3002;
const uri = process.env.MONGODB_URI;

//!============START SERVER & CALL THE FUNCTION===========
app.listen(PORT, () => {
  console.log("Server run on ", PORT);
  connectDB();
});

//!============CONNECT WITH MONGO-DB=============
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connect with mongoDB");
  } catch (err) {
    console.log("Failed to connect");
  }
};
