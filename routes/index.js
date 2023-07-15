var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(`port:${process.env.PORT}`)
  res.render('index', { title: 'Express'});
  
});

module.exports = router;

