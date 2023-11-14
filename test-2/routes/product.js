const express = require('express');
const { getProductLowQuantity, getAllProduct } = require('../controllers/product');
const { authentication } = require('../middlewares/authentication');
const router = express.Router();

/* GET users listing. */

router.get('/',authentication, getAllProduct);
router.get('/get-product-low-quantity',authentication, getProductLowQuantity);

module.exports = router;
