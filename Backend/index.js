const express = require("express");
const dotEnv = require("dotenv").config();
const mongoose = require("mongoose");
const vendorRoutes = require("./routes/vendorRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const productRoutes = require("./routes/productRoutes");
// const bodyParser = require("body-parser");

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((er) => console.log(er));

app.use(express.json());
app.use("/vendor", vendorRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/product", productRoutes);

app.get("/", (req, res) => {
  res.send("Server is here!");
});

app.listen(process.env.PORT, () => {
  console.log("Server running...");
});
