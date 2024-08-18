const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  restaurant: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
      },
    ],
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);
module.exports = Vendor;
