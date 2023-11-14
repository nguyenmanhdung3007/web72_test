const mongoose = require("mongoose");

const productModel = mongoose.Schema({
  sku: String,
  description: String,
  instock: Number,
});

module.exports = mongoose.model("products", productModel);
