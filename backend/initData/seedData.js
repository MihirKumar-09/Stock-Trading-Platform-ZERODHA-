import mongoose from "mongoose";
import { holdings } from "./holdingsData.js"; // Use when need Holdings Data;
import { positions } from "./positionData.js"; // Use when need Positions Data;
import { watchlist } from "./watchListData.js"; //Use when neef WatchList Data;
import Holdings from "../models/HoldingsModel.js";
import Position from "../models/PositionModel.js";
import WatchList from "../models/WatchListModel.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.resolve("../.env"),
});
const uri = process.env.MONGODB_URI;

//!==========CONNECT MONGO-DB===========
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connect with DB ✅");
  } catch (err) {
    console.log("Failed to connect with DB ❌", err);
  }
};

//!============INSERT DATA==========
const initData = async () => {
  try {
    await connectDB();

    // Delete Old Holdings Data;
    await Holdings.deleteMany({});
    console.log("Old Holdings data deleted 🐞");
    // Delete Old Position Data;
    await Position.deleteMany({});
    console.log("Old Position data deleted 🐞");
    // Delete Old WatchList Data;
    await WatchList.deleteMany({});
    console.log("Old Position data deleted 🐞");

    // Insert New Holdings Data;
    await Holdings.insertMany(holdings);
    console.log("Insert holdings data successfully ✅");
    // Insert New Position Data;
    await Position.insertMany(positions);
    console.log("Insert positions data successfully ✅");
    // Insert New WatchList Data;
    await WatchList.insertMany(watchlist);
    console.log("Insert WatchList data successfully ✅");
  } catch (err) {
    console.log("Failed to insert data ❌", err);
  }
};

initData();
