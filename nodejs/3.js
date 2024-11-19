var fs = require("fs");

console.log("Start");

var ans = fs.readFileSync("index.html", "UTF-8");
console.log(ans);

console.log("End");
