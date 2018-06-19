var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cool', function(req, res, next) {
  res.send("God's word is a compedium of all the possibilities that are resident in God.");
});

module.exports = router;
