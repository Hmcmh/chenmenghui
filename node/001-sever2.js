var express = require('express');

var app = express();

app.use(express.static("public")).listen(8089);

app.get('/', function (req, res) {

res.send('Hello World');

})

var server = app.listen(8082, function () {

var host = server.address().address

var port = server.address().port

console.log("应用实例，访问地址为http://10.14.38.99",host, port)

})