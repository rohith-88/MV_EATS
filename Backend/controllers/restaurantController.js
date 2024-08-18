const Restaurant = require("../models/Restaurant");
const Product = require("../models/Product");
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

const getRestaurantData = async (req, res) => {
  try {
    const restaurantData = await Restaurant.findById(req.params.id).populate(
      "product"
    );
    if (!restaurantData) {
      res.status(401).json({ error: "USER DOES NOT EXIST" });
    }
    res.status(200).json({ restaurantData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const deletedData = await Restaurant.findByIdAndDelete(restaurantId);
    if (!deletedData) {
      res.status(401).json({ error: "Restaurant not found" });
    }
    const vendor = await Vendor.findById(deletedData.owner);
    vendor.restaurant.pop(deletedData._id);
    await vendor.save();
    await Product.deleteMany({ restaurant: deletedData._id });

    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};
module.exports = { addRestaurant, getRestaurantData, deleteRestaurant };
