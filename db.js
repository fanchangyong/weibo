var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'19890213',
	database:'weibo',
	multipleStatements:true
});

module.exports = connection;
