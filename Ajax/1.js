"use strict";

document.getElementById("btn1").addEventListener("click", function () {
  //   alert("xyz");

  var xmlhttp = new XMLHttpRequest();
  console.log(xmlhttp);
  console.log(xmlhttp.readyState);
  console.log(xmlhttp.status);
  xmlhttp.onreadystatechange = function () {
    console.log(xmlhttp.readyState, xmlhttp.status);
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log(xmlhttp.responseText);
      var result = JSON.parse(xmlhttp.responseText);
      console.log(result);

      // short-circuit
      result &&
        result.length > 0 &&
        result.forEach(function (v, i) {
          console.log(v, i);
          var divtag = document.createElement("div");
          var imgtag = document.createElement("img");
          var h2tag = document.createElement("h2");
          var ptag = document.createElement("p");
          divtag.append(imgtag, h2tag, ptag);
          imgtag.src = v.image;
          h2tag.innerHTML = v.price;
          ptag.innerHTML = v.title;
          divtag.className = "col-xl-3 text-center";
          imgtag.className = "img-fluid";
          document.querySelector("#row").append(divtag);
        });
    }
  };
  xmlhttp.open("GET", "https://fakestoreapi.com/products");

  xmlhttp.send();
});
