const { Schema, models, model } = require("mongoose");

const UsersSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // Ensure email is unique
    trim: true,
    lowercase: true,
  },
  image: String,
  // username: {
  //     type: String,
  //     unique: true,
  //     trim: true,
  //     lowercase: true,
  // },
});

module.exports = models.Users || model("Users", UsersSchema);
