"use strict";

const fs = require("fs");

let file1Raw = fs.readFileSync("newTraits.json");
let file1 = JSON.parse(file1Raw);

const metadata = [];

for (let i = 0; i < file1.length; i++){
  //console.log(`index ${i} is ` + file1[i][""]);
}

const number = file1[0];
const background = file1[1];
const fur = file1[2];
const eyes = file1[3];
const beak = file1[4];
const skin_traits = file1[5];
const clothes = file1[6];
const neckwear = file1[7];
const handling = file1[8];
const facewear = file1[9];
const headwear = file1[10];

//console.log(file1)

console.log(Object.keys(background).length);

for (let i = 1; i < 34; i++) {
  let edition = i;
  metadata.push({"edition": edition});
}

console.log(metadata)

let _array = []
_array.push({"trait_type": file1[1][''], "value": file1[1]['__'+1]})
_array.push({"trait_type": file1[2][''], "value": file1[2]['__'+1]})
_array.push({"trait_type": file1[3][''], "value": file1[3]['__'+1]})

//console.log(array)

// arrays = []

for (let i = 1; i < 34; i++){
  let array = []
  for (let j = 1; j < 11; j++) {
    let trait_type = file1[j][''];
    let value = file1[j]['__'+i];
    array.push({"trait_type": trait_type, "value": value })
  }
  metadata[i-1].attributes = array;
}

console.log(metadata[0])

//console.log(file1.length)


let writeData = JSON.stringify(metadata, null, 2);

fs.writeFile("convertMetadata.json", writeData, (err) => {
  if (err) throw err;
  console.log(`File was written...`);
});
