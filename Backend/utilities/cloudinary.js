const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv").config();
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (filePath) => {
  try {
    const cloudFile = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    console.log("file uploaded to cloudinary ");
    fs.unlinkSync(filePath);
    return cloudFile.url;
  } catch (error) {
    fs.unlinkSync(filePath);
    return null;
  }
};

module.exports = uploadToCloudinary;
