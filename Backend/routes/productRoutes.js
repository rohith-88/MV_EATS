const express = require("express");
const productController = require("../controllers/productController");
const upload = require("../middlewares/getFile");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.use(
  "/add-product/:id",
  verifyToken,
  upload.single("image"),
  productController.addProducts
);

router.use("/remove-product/:id", verifyToken, productController.deleteProduct);

module.exports = router;
