import express from "express";
import Order from "../models/OrderModel.js";
import Holdings from "../models/HoldingsModel.js";
const router = express.Router();

//!=========GET -> ALL ORDERS==========
router.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await Order.find({});
    if (!allOrders) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(202).json({ message: "Fetch all order", allOrders });
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch all orders ❌" });
  }
});

//!======CREATE NEW ORDER========
router.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  if (!name || !qty || !price || !mode) {
    return res.status(400).json({ message: "All fields required" });
  }
  try {
    // Create Order &  Save it ;
    let newOrder = new Order({
      name: name,
      qty: qty,
      price: price,
      mode: mode,
    });
    await newOrder.save();

    // Update Holdings;
    const existingHolding = await Holdings.findOne({ name });

    if (mode === "BUY") {
      if (existingHolding) {
        const totalQty = existingHolding.qty + qty;

        const totalCost =
          existingHolding.qty * existingHolding.avg + qty * price;

        existingHolding.qty = totalQty;
        existingHolding.avg = totalCost / totalQty;

        await existingHolding.save();
      } else {
        await Holdings.create({
          name,
          qty,
          avg: price,
          price,
        });
      }
    }

    if (mode === "SELL") {
      if (!existingHolding) {
        return res.status(400).json({ message: "No holdings found to sell" });
      }

      if (existingHolding.qty < qty) {
        return res.status(400).json({ message: "Not enough quantity to sell" });
      }

      existingHolding.qty -= qty;

      if (existingHolding.qty === 0) {
        await Holdings.deleteOne({ name });
      } else {
        await existingHolding.save();
      }
    }

    return res.status(202).json({ message: "New order create ✅", newOrder });
  } catch (err) {
    return res.status(500).json({ message: "Failed to create new order ❌" });
  }
});

export default router;
