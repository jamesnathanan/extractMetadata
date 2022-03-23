"use strict";

const fs = require("fs");

for (let i = 1; i < 5556; i++) {
  let file1Raw = fs.readFileSync(`${i}.json`);
  let file1 = JSON.parse(file1Raw);

  console.log(file1)
  let edition = file1.edition

  file1.name = "HAPE Mfers #" + file1.edition;

  file1.attributes = file1.attributes.filter( attr => attr.value !== "None");
  file1.attributes = file1.attributes.filter( attr => attr.value !== "none");

  console.log(file1)

  let writeData = JSON.stringify(file1, null, 2);

  fs.writeFile(`./newMetadata/${edition}.json`, writeData, (err) => {
    if (err) throw err;
    console.log(`File was written...`);
  });
}
