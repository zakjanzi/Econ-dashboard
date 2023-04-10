import express from "express";
import GasPrice from "../models/GasPrice.js";

const router = express.Router();

router.get("/gasPrices", async (req, res) => {
  try {
    const gasPrice = await GasPrice.find();
    res.status(200).json(gasPrice);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
