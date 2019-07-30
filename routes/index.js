var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Johndrew Out of Milk: moo moo moo');
});

module.exports = router;
