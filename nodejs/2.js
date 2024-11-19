var http = require("http");
// console.log(http);

const server = http.createServer(function (req, res) {
  console.log(typeof req);
  console.log(typeof res);

  res.end("Hello World");
  res.end("Welcome to akshay world");
});

server.listen(9000);
