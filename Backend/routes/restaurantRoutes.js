const express = require("express");
const restaurantController = require("../controllers/restaurantController");
const upload = require("../middlewares/getFile");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router
  .route("/add-firm")
  .post(
    verifyToken,
    upload.single("image"),
    restaurantController.addRestaurant
  );

module.exports = router;
