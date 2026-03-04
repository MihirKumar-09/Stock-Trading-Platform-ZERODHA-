import mongoose from "mongoose";

const watchList = new mongoose.Schema({
  name: String,
  price: Number,
  percent: Number,
  isDown: Boolean,
});

const WatchList = mongoose.model("WatchList", watchList);
export default WatchList;
