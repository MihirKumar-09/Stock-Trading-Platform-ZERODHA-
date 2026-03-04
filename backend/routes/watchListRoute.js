import express from "express";
import WatchList from "../models/WatchListModel.js";
const router = express.Router();

//!=========GET ALL WATCH LIST DATA=========
router.get("/allWatchList", async (req, res) => {
  try {
    const allWatchLists = await WatchList.find({});
    if (!allWatchLists) {
      return res.status(404).json({ message: "WatchList not found!" });
    }
    return res
      .status(202)
      .json({ message: "Fetch successfully", allWatchLists });
  } catch (err) {
    return res.status(500).json({ message: "Failed to get watchList data" });
  }
});
export default router;
