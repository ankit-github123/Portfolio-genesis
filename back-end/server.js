// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const profileRoutes = require("./routes/profile");
const imageUploads = require("./routes/imageUpload");
require("dotenv").config();
// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", profileRoutes);
app.use("/", imageUploads);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const connectToDB = async () => {
  // mongoose.set('strictQuery', true);
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "portfolio_genesis",
      // useNewUrlParser: true, // Use the new URL parser
      // useUnifiedTopology: true, // Use the new server discovery and monitoring engine
    });
    isConnected = true;
    console.log("Mongodb connection established");
  } catch (err) {
    console.log(err);
  }
};
connectToDB();
