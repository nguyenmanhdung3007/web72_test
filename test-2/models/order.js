const mongoose = require("mongoose");

const orderModel = mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number,
  description: String,
});

module.exports = mongoose.model("orders", orderModel);
