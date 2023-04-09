import express from "express";
import Blackmarket from "../models/Blackmarket.js";

const router = express.Router();

router.get("/blackmarkets", async (req, res) => {
  try {
    const blackmarkets = await Blackmarket.find();
    res.status(200).json(blackmarkets);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
