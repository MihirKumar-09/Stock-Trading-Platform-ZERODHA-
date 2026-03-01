import express from "express";
import Position from "../models/PositionModel.js";
const router = express.Router();

//!=========GET->ALL-POSITION==========
router.get("/allPosition", async (req, res) => {
  try {
    const allPosition = await Position.find({});
    if (!allPosition) {
      return res.status(404).json({ message: "Position not found! ❌" });
    }
    return res
      .status(202)
      .json({ message: "Get all Position ✅", allPosition });
  } catch (err) {
    return res.status(500).json({ message: "Failed to fetch all position ❌" });
  }
});

export default router;
