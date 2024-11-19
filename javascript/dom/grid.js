"use strict";
var catogory = ["Electronic", "Clothing", "Books", "Home & Garden"];
var product = [
  {
    name: "Shirt",
    price: 1999,
    path: "https://wrogn.com/cdn/shop/files/3_9f276af7-2eff-4422-9dd3-5747b9724320.jpg?v=1729928962&width=360",
  },
  {
    name: "Shirt",
    price: 1839,
    path: "https://wrogn.com/cdn/shop/files/VM4.jpg?v=1730264880&width=360",
  },
  {
    name: "Shirt",
    price: 1599,
    path: "https://wrogn.com/cdn/shop/files/1_256242e3-fb32-45d3-88a8-f80bde8a04cb.jpg?v=1729610912&width=360",
  },
];

// Short Circuit oprator

catogory &&
  catogory.length > 0 &&
  catogory.forEach(function (v, i) {
    console.log(v, i);
    var listag = document.createElement("li");
    console.log(listag);
    listag.innerHTML = v;
    document.querySelector("ul").append(listag);
  });

product &&
  product.length > 0 &&
  product.forEach(function (v, i) {
    console.log(v, i);
    var divtag = document.createElement("div");
    console.log(divtag);

    divtag.className = "col-xl-4 text-center";
    var imgtag = document.createElement("img");
    var h2tag = document.createElement("h2");
    var ptag = document.createElement("p");
    imgtag.src = v.path;
    imgtag.className = "img-fluid";
    h2tag.innerHTML = v.price;
    ptag.innerHTML = v.name;
    divtag.append(imgtag, h2tag, ptag);
    document.getElementById("row").append(divtag);
  });
