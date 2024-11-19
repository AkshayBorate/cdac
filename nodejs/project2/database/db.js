var mongoose = require("mongoose");

async function dbconnect() {
  var connection = await mongoose.connect("mongodb://127.0.0.1:27017/product");
  return connection;
}

module.exports = dbconnect;
