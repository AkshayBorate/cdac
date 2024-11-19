"use strict";
console.log(document);
console.log(typeof document);
console.log(document.getElementById("x1"));
console.log(document.getElementById("x2"));

// Dom Event Handling
var flag = 0;
document.getElementById("x1").onclick = function () {
  console.log(document.body);

  if (flag == 0) {
    document.body.style.background = "lightgreen";
    document.body.style.color = "black";
    flag = 1;
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
    flag = 0;
  }
};

// document.getElementById("x2").onclick = function () {
//   console.log(document.body);
//   document.body.style.background = "white";
//   document.body.style.color = "black";
// };
