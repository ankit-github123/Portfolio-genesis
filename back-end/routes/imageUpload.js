const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder for storing uploads
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename
  },
});

const upload = multer({ storage: storage });
router.post("/images", upload.single("image"), (req, res) => {
  console.log(path.join(path.basename(__dirname), "/images"));
  const imageName = req.file.filename;
  //   const description = req.body.description;
  console.log(imageName, req.body.cap);
  res.send({ path: "sdf" });
});

router.get("/getimage", (req, res) => {
  const imageName = "uploads/a.png";
  const filePath = path.resolve(imageName);
  console.log(filePath);
  // const imageBuffer = fs.readFileSync(filePath, "base64");

  // Convert the Buffer to a Blob
  const imageBuffer = fs.readFileSync(filePath);

  // Send the Buffer as a response
  res.setHeader("Content-Type", "image/jpeg"); // Adjust the type based on your image format
  res.send(imageBuffer);
  // res.sendFile(filePath);
  // res.send({ url: imageBuffer });
});

router.get("/getpdf", (req, res) => {
  const imageName = "uploads/b.pdf";
  const filePath = path.resolve(imageName);
  console.log(filePath);
  // const imageBuffer = fs.readFileSync(filePath, "base64");

  // Convert the Buffer to a Blob
  const imageBuffer = fs.readFileSync(filePath);

  // Send the Buffer as a response
  res.setHeader("Content-Type", "application/pdf"); // Adjust the type based on your image format
  res.send(imageBuffer);
  // res.sendFile(filePath);
  // res.send({ url: imageBuffer });
});
module.exports = router;
