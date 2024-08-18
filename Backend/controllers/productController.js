const Product = require("../models/Product");
const Restaurant = require("../models/Restaurant");
const uploadToCloudinary = require("../utilities/cloudinary");

const addProducts = async (req, res) => {
  try {
    const { name, bestseller, price, type, category } = req.body;
    const restaurantId = req.params.id;
    if ([name, price].some((data) => data?.trim() === "")) {
      res.status(401).json({ error: "ENTER ALL MANDATORY FIELDS" });
    }
    console.log(req.file);
    const imageURL = await uploadToCloudinary(req.file.path);
    if (!imageURL) {
      res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      res.status(401).json({ error: "USER DOES NOT EXIST" });
    }

    const productData = new Product({
      name,
      bestseller,
      price,
      type,
      category,
      image: imageURL,
      restaurant: restaurantId,
    });
    const savedData = await productData.save();
    restaurant.product.push(savedData._id);
    await restaurant.save();
    return res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

module.exports = { addProducts };
