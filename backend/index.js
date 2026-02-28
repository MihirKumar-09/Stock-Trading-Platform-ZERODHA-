require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const cors = require(cors);

const app = express();
const PORT = 3002;

app.use(express.json());
// app.use(cors());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with Database!");
  } catch (err) {
    console.log("Failed to connect with DB", err);
    process.exit(1);
  }
};

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
};

startServer();
