const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("users", userModel);
