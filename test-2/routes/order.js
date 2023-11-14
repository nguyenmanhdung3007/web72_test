const express = require('express');
const { getOrderWithDescription } = require('../controllers/order');
const { authentication } = require('../middlewares/authentication');
const router = express.Router();

/* GET users listing. */

router.get('/with-description',authentication, getOrderWithDescription);


module.exports = router;
