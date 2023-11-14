const productModel = require("../models/product");

const getAllProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({ error: error.message || "Failed" });
  }
};

const getProductLowQuantity = async (req, res) => {
  try {
    const { lowQuantity } = req.query;
    if(!lowQuantity){
        if (!lowQuantity) {
            return res.status(400).json({ message: "thêm số lượng" });
          }
    }
    const filter = lowQuantity ? { instock: { $lt: lowQuantity } } : {};
    const products = await productModel.find(filter);
    res.json(products);
  } catch (error) {
    return res.status(400).json({ error: error.message || "Failed" });
  }
};

module.exports = {
  getAllProduct,
  getProductLowQuantity,
};
