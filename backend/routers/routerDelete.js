const express =  require('express')
const router = express.Router();
require("dotenv").config({ path: __dirname+"/../.env"});
const jwt = require('jsonwebtoken');
const { compare } = require('../src/hashController');

router.delete('/delete/?user', (req, res) => {

});

module.exports = router;