var express = require('express');
var app = express();
var fs = require("fs");
app.post('/incoming/:messages', function (req, res) {
   // First read existing users.
		var msg = req.params.messages;
		var users = JSON.parse(msg);
		//console.log(users);
		console.log(users["user3"].name);
		res.sendStatus(200);
})

var server = app.listen(8081, "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})