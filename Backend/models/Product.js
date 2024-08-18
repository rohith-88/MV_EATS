const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: [
    {
      type: String,
      enum: ["Veg", "Non-Veg"],
    },
  ],
  type: {
    type: String,
    enum: ["South Indian", "North Indian", "Chinese", "Desserts"],
  },
  bestseller: {
    type: Boolean,
    default: false,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
