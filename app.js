var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

module.exports = server;
