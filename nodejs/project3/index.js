const nodemailer = require("nodemailer");
const express = require("express");
const mongoose = require("mongoose");
const db = require("./database/db.js");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rahul.patil.sbg@gmail.com",
    pass: "kzvo ipnr ktnh zopd",
  },
});

db();

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  email: String,
  mobile: Number,
});

const userModel = mongoose.model("newusers", userSchema);

var app = express();
app.use(express.json());

app.use(express.urlencoded());

app.get("/add", (request, response) => {
  response.render("adduser.ejs");
});

app.get("/show", async (request, response) => {
  try {
    var result = await userModel.find();
    // response.send(res);
    response.render("showuser.ejs", { data: result });
  } catch (err) {
    response.send(err.message);
  }
});
app.post("/useraction", async (request, response) => {
  //   console.log(request.body);
  try {
    var result = new userModel(request.body);
    await result.save();
    main(request.body.email);
    response.redirect("/show");
  } catch (err) {
    response.send(err.message);
  }
});

async function main(emailid) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "<rahul.patil.sbg@gmail.com>", // sender address
    to: emailid, // list of receivers
    subject: "Moto ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
app.listen(9000);
