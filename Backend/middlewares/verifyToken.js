const Vendor = require("../models/Vendor");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const verifyToken = async (req, res, next) => {
  try {
    // const token = req.headers["x-token"];
    // console.log(req.cookies);
    const token = req.headers["token"];
    if (!token) {
      return res.status(401).json({ error: "TOKEN NOT FOUND ERROR" });
    }
    const tokenData = await jwt.verify(token, process.env.SECRET_KEY);

    const vendorData = await Vendor.findById(tokenData.id);
    if (!vendorData) {
      return res.status(401).json({ error: "USER NOT FOUND ERROR" });
    }
    req.vendorId = tokenData.id;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "INVALID TOKEN ERROR" });
  }
};

module.exports = verifyToken;
