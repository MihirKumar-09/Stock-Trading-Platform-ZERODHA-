import express from "express";
import Holdings from "../models/HoldingsModel.js";
const router = express.Router();

//!===========GET->ALL HOLDINGS==========
router.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await Holdings.find({});
    if (!allHoldings) {
      return res.status(404).json({ message: "Holdings not found" });
    }
    return res.status(202).json({
      message: "Get all holdings",
      allHoldings,
    });
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

export default router;
