import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const PORT = 3002;
const uri = process.env.MONGODB_URI;

app.use(bodyParser.json());
app.use(cors());

//!=======IMPORT ALL ROUTES=========
import HoldingRoute from "./routes/holdingRoute.js";
import PositionRoute from "./routes/positionRoute.js";
import OrderRoute from "./routes/orderRoute.js";

//!===========REGISTER WITH SERVER=========
app.use("/holdings", HoldingRoute);
app.use("/position", PositionRoute);
app.use("/order", OrderRoute);

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
