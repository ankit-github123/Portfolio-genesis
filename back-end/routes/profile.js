const express = require("express");
const Users = require("../models/Users");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Example API route
router.get("/api/data", async (req, res) => {
  const sessionUser = await Users.findOne({ email: "ankit190900@gmail.com" });
  console.log(sessionUser, "dt1");
  sessionUser.email = "dsfasdfasdfsa";
  // data = { message: "This is sample data.", data: "234234234" };
  res.json(sessionUser);
});

module.exports = router;
