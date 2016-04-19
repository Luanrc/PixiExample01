var http = require("http");
var express = require("express");

var app = express();
// app.use("/home", express.static(__dirname + "public"));

app.get("/", function(req, res) {
	res.send("allahu ahckbar");
});

http.createServer(app).listen(3000, function() {
	console.log("server online na porta: ");
});