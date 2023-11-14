const express = require('express');
const { login } = require('../controllers/user');
const router = express.Router();

/* GET users listing. */
// router.post('/',(req, res) => res.json("ok"));
router.post('/login',login);

module.exports = router;
