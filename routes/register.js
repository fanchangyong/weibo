var express = require('express');
var router = express.Router();
var mysql = require('../db.js');

router.get('/',function(req,res){
	res.render('register',{title:'Register'});
});

router.post('/',function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	mysql.query('set @r=null;call user_register(?,?,@r);select @r;',
		[username,password],
		function(err,result){
		if(err){
			console.log('err:',err);
			throw new Error();
		}else{
			console.log('register result:',result);
			res.end('<div align="center"><h1>Register OK!</h1></div>');
		}
	});
});

module.exports = router;
