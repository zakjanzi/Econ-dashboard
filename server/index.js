import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import gasPriceRoutes from "./routes/gasPrice.js";
import blackmarketsRoutes from "./routes/blackmarket.js"
import KPI from "./models/KPI.js";
import Product from "./models/Product.js";
import GasPrice from "./models/GasPrice.js";
import Blackmarket from "./models/Blackmarket.js";
import { kpis, products, gasPrice } from "./data/data.js";
import { usdLbpBlackmarket } from "./data/usdLbpBlackmarket.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/gasPrice", gasPriceRoutes)
app.use("/blackmarket", blackmarketsRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME ONLY OR AS NEEDED */
    await mongoose.connection.db.dropDatabase();
    KPI.insertMany(kpis);
    Product.insertMany(products);
    // Blackmarket.insertMany(usdLbpBlackmarket)
    GasPrice.insertMany(gasPrice)
  })
  .catch((error) => console.log(`${error} did not connect`));
