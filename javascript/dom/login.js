"use strict";
import auth from "./library.js";
document.querySelector("button").onclick = function () {
  //   alert("Hello");

  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;

  console.log(data1);
  console.log(data2);

  var authobj = new auth();
  console.log(authobj);

  var ans1 = authobj.checkemail(data1);
  console.log(ans1);

  var ans2 = authobj.checkpass(data2);
  console.log(ans2);

  if (ans1 && ans2) {
    document.querySelector("p").innerHTML = "ok";
  } else {
    document.querySelector("p").innerHTML = "Invalid Email or Password";
  }
};
