var fs = require("fs");
var http = require("http");
const server = http.createServer((req, res) => {
  fs.readFile("index.html", "UTF-8", (err, data) => {
    res.end(data);
  });
});
server.listen(9065);
