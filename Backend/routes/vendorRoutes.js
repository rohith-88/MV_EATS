const vendorController = require("../controllers/vendorController");
const express = require("express");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/register", vendorController.vendorRegister);

router.post("/login", vendorController.vendorLogin);

router.use("/dashboard", verifyToken, vendorController.getVendorDetails);

module.exports = router;
