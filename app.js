var express = require("express");
var app = express();

const port = process.env.port || 3001
const hostname = process.env.HOST || "127.0.0.1";


app.get("/", function (req, res) {
  res.statusCode = 200;
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from('<h1>Hello World! Hola Mundo!</h1>' + '<h2>We are deployed!</h2>'))
});

var server = app.listen(port, function () {
   console.log("We are live on port ", hostname, port);
});
