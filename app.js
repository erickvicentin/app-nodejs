const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hello World! We are deployed!!');
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});