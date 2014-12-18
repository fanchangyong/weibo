var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var has_login = req.session.has_login;
	var user_name = req.session.user_name;
	if(has_login){
		res.setHeader('content-type','text/html');
		res.write('<a> href="" Logout</a>');
		res.end('User:'+user_name);
		//res.render('index', { title: 'Express',
			//has_login:has_login,
			//user_name:user_name});
	}
	else{
		res.render('index');
	}
});

module.exports = router;
