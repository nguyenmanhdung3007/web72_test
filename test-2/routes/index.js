const express = require('express');
const userRouter = require('./user');
const productRouter = require('./product');
const orderRouter = require('./order');
const router = express.Router();

/* GET home page. */
router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/order', orderRouter);


module.exports = router;
