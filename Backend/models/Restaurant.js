const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  offer: {
    type: String,
  },
  category: {
    type: [
      {
        type: String,
        enum: ["Veg", "Non-Veg"],
      },
    ],
  },
  type: [
    {
      type: String,
      enum: ["South Indian", "North Indian", "Chinese", "Desserts"],
    },
  ],
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
