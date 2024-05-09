const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  detail: { type: String, required: true },
  organization: { type: String },
  role: { type: String },
  project: { type: String },
  services: { type: String },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
