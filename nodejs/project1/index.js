var express = require("express");
var mongoose = require("mongoose");
var db = require("./database/db.js");
var cors = require("cors");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "akshay",
});

// console.log(db);
db();

const Schema = mongoose.Schema;
const userschema = new Schema({
  name: String,
  age: Number,
  place: String,
});

const userModel = mongoose.model("users", userschema);

var app = express();
app.use(cors());
app.use(express.json());

//localhost:9000/users
http: app.get("/users", async (request, response) => {
  try {
    var res = await userModel.find();
    response.send(res);
  } catch (err) {
    res.send(err.message);
  }
});

http: app.post("/users", async (request, response) => {
  // console.log(request.body);
  try {
    var record = userModel(request.body);
    var answer = await record.save();
    response.send("record Inserted");
  } catch (err) {
    response.send(err.message);
  }
});

http: app.put("/users", (request, response) => {
  response.send("update data from database");
});

http: app.delete("/users", (request, response) => {
  response.send("delete data from database");
});

app.get("/userinfo", (request, response) => {
  connection.query("select * from emp", (err, result) => {
    if (err) {
      response.send(err.message);
    } else {
      response.send(result);
    }
  });
});

app.post("/userinfo", (request, response) => {
  console.log(request.body);
  connection.query("insert into emp set ?", request.body, (err, result) => {
    if (err) {
      response.send(err, message);
    } else {
      response.send("user added");
    }
  });
});
app.listen("9000");
