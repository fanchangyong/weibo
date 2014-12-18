var express = require('express');
var router = express.Router();
var db = require('../db');
var util = require('util');

router.get('/',function(req,res){
	res.render('login',{title:'Login'});
});

router.post('/',function(req,res){
	var username = req.body.username;
	//var sql = util.format('select * from user where name=%s;',username);
	db.query('select * from user where name=?',username,function(err,rows){
		if(err){
			console.log('select error:',err);
			throw new Error("Select Error!");
		}else{
			console.log('rows:',rows);
		}
	});
	req.session.has_login = true;
	req.session.user_name = username;
	res.redirect('/');
	//res.end('has been set,please redirect manually');
});

module.exports = router;

