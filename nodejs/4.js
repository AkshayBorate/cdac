var fs = require("fs");

console.log("Start");

//Asynchronous Way 
fs.readFile("index.html", "UTF-8", (err, data) => {
  console.log(data);
});

console.log("End");
