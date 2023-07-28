var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/chartbuster');
  
});

module.exports = router;

