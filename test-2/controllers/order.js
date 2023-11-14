const order = require('../models/order');
const orderModel = require('../models/order');
const productModel = require('../models/product');

const getOrderWithDescription = async (req, res) => {
    try {
      const orders = await orderModel.find();
      const product = await productModel.find()

      for (let i = 0; i < orders.length; i++) {
        const product = await productModel.findOne({sku: orders[i].item});
        orders[i].description = product.description
      }
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ error: error.message || "Failed" });
    }
  };
  module.exports = {getOrderWithDescription}