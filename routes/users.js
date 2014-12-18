var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/sub',function(req,res){
	res.send('sub route in user');
});

module.exports = router;
