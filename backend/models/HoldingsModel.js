import mongoose from "mongoose";

const HoldingsSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const Holdings = mongoose.model("Holdings", HoldingsSchema);
export default Holdings;
