const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  passwordConfirm: {
    type: String,
    required: [true, "Confirm password is required"]
  },
  gender: {
    type: String,
    required: [true, "Gender is required"]
  },
  dob: {
    type: String,
    required: [true, "DOB is required"]
  },
  profile_pic: {
    type: String
  }
});

module.exports = mongoose.model("User", userSchema);
