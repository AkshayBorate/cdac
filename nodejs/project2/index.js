var express = require("express");
var mongoose = require("mongoose");
var db = require("./database/db.js");
// console.log(db);

db();

const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: String,
  price: Number,
  category: String,
});

const productModel = mongoose.model("products", productSchema);

var app = express();

app.use(express.json());

app.get("/products", async (request, response) => {
  try {
    var result = await productModel.find();
    response.send(result);
  } catch (err) {
    response.send(err.message);
  }
});

app.post("/products", async (request, response) => {
  try {
    var result = productModel(request.body);
    var ans = await result.save();
    response.send("data inserted");
    console.log(ans);
  } catch (err) {
    response.send(err.message);
  }
});

app.listen(9500);
