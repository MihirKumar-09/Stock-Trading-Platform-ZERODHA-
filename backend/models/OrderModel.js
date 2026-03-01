import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String, // Buy or Sell
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
