var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<p style="margin: 0 auto;width: 960px;padding: 2em 0;line-height: 1.8em;font-family: monospace;font-size: 1em;"> \
  Hello World! \
  <br> \
  Alpine Nginx & Node.js Image © Powered By Node.js & Nginx. \
  </p>');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log('Example app listening at http://%s:%s', host, port);
});