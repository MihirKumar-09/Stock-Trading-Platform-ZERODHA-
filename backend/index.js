require("dotenv").config();
import express from "express";
import { connect } from "mongoose";

const PORT = process.env.PORT || 3002;
const app = express();

async function startServer() {
  try {
    await connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });
  } catch (err) {
    console.error("DB connection failed ❌", err);
  }
}

startServer();
