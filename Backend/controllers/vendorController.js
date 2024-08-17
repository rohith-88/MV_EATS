const Vendor = require("../models/Vendor");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const vendorRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const vendorEmail = await Vendor.findOne({ email });
    if (vendorEmail) {
      return res.status(400).json("Email already exists!!");
    }
    const hashPassword = await bcrypt.hash(password, 13);
    const vendorData = new Vendor({
      username,
      email,
      password: hashPassword,
    });
    await vendorData.save();

    res.status(201).json({ message: "VENDOR SUCCESSFULLY REGISTERED" });
    console.log("vendor added");
  } catch (error) {
    console.error("AN ERROR OCCURED:", error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

const vendorLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const vendorData = await Vendor.findOne({ email });

    if (!vendorData) {
      return res.status(401).json({ error: "USER DOES NOT EXIST" });
    }
    if (!(await bcrypt.compare(password, vendorData.password))) {
      return res.status(401).json({ error: "INCORRECT PASSWORD" });
    }
    res.status(200).json({ message: "LOGIN SUCCESSFUL" });
    console.log("vendor login complete");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "INTERNAL SERVER ERROR" });
  }
};

module.exports = { vendorRegister, vendorLogin };
