"use strict";

const fs = require("fs");

let file1Raw = fs.readFileSync("_metadata.json");
let file1 = JSON.parse(file1Raw);

file1.forEach((element) => {
  const edition = element.edition;
  //console.log(edition);

  let writeData = JSON.stringify(element, null, 2);

  fs.writeFile(`${edition}.json`, writeData, (err) => {
    if (err) throw err;
    console.log(`File ${edition} was written...`);
  });
});
