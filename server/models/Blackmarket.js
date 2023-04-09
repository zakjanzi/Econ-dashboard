import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const blackmarketSchema = new Schema(
  {
    dateTime: String,
    usdToLbp: {
      type: mongoose.Types.Currency,
      currency: "LBP",
    },
  },
  { toJSON: { getters: true } }
);



const Blackmarket = mongoose.model("Blackmarket", blackmarketSchema);

export default Blackmarket;
