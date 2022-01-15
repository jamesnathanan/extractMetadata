"use strict";

const fs = require("fs");

let file1Raw = fs.readFileSync("renamemetadata.json");
let file1 = JSON.parse(file1Raw);

//console.log(file1);

file1.forEach((element) => {
  //console.log(element.attributes);
  //checkContinent(element);
  //reNameCities(element);
  fs.rename(`${element.edition}.png`, `${element.name}.png`, function (err) {
    if (err) console.log("ERROR: " + err);
  });
});
