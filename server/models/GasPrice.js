import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const GasPriceSchema = new Schema(
  {
    _id: {
      type: String,
    },
  },
  {
    price: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  {
    name: {
      type: String,
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

const GasPrice = mongoose.model("gasPrice", GasPriceSchema);

export default GasPrice;