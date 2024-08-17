const Restaurant = require("../models/Restaurant");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const uploadToCloudinary = require("../utilities/cloudinary");
const Vendor = require("../models/Vendor");

const addRestaurant = async (req, res) => {
  try {
    const { name, location, offer, category, type } = req.body;

    if ([name, location].some((data) => data?.trim() === "")) {
      res.status(401).json({ error: "ENTER ALL MANDATORY FIELDS" });
    }
    console.log(req.file);
    const imageURL = await uploadToCloudinary(req.file.path);
    if (!imageURL) {
      res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }

    // const vendorId = jwt.verify(req.headers["x-token"], process.env.SECRET_KEY);

    const vendor = await Vendor.findById(req.vendorId);
    if (!vendor) {
      res.status(401).json({ error: "USER DOES NOT EXIST" });
    }

    const restaurantData = new Restaurant({
      name,
      location,
      offer,
      type,
      category,
      image: imageURL,
      owner: vendor._id,
    });
    const savedData = await restaurantData.save();
    vendor.restaurant.push(savedData._id);
    await vendor.save();

    return res.status(200).json({ message: "Restaurant added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

module.exports = { addRestaurant };
