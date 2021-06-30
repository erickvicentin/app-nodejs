var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World! Hola Mundo!");
});

var server = app.listen(process.env.PORT || 3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App corriendo en puerto ", host, port);
});
