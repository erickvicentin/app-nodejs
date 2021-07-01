var express = require("express");
var app = express();

const port = process.env.port || 3001
const hostname = process.env.HOST || "127.0.0.1";


app.get("/", function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World! We are deployed!')
});

var server = app.listen(port, function () {
   console.log("We are live on port ", hostname, port);
});
