"use strict";

const fs = require("fs");

const rareAccess = [
  "RareHead6",
  "RareHead2",
  "RareHead3",
  "RareHead4",
  "RareHead5",
  "CuckooHead",
  "CyberHelmetHead",
  "CyberPunkHead",
  "HeadphoneHead",
  "MoleculeHead",
  "RareHead1",
  "RocketHead",
];

const rareBody = ["RareBody1", "RareBody2", "RareBody3"];

// let file1Raw = fs.readFileSync("3.json");
let file1Raw = fs.readFileSync("test.json");
let file1 = JSON.parse(file1Raw);

console.log(file1);

file1.forEach((element) => {
  console.log(element.attributes);
  if (element.attributes[0].value === "Background 01") {
    element.attributes[0].value = "Black";
  }
  if (element.attributes[0].value === "Background 02") {
    element.attributes[0].value = "White";
  }
  if (element.attributes[0].value === "Background 03") {
    element.attributes[0].value = "Grey";
  }
  //   newData.mod5 = mod5;
  //let writeData = JSON.stringify(newData, null, 2);
  //fs.writeFile(edition + ".json", writeData, (err) => {
  // if (err) throw err;
  //console.log(`File ${edition}.json was written...`);
  //});
});

// file1.forEach((element) => {
//   const { name, description, edition } = element;
//   const frame = element.attributes[1].value;
//   const mod1 = element.attributes[2].value;
//   const mod2 = element.attributes[3].value;
//   const mod3 = element.attributes[4].value;
//   const mod4 = element.attributes[5].value;
//   const mod5 = element.attributes[6].value;

//   const newData = {};
//   newData.name = name;
//   newData.description = description;
//   newData.edition = edition;
//   newData.frame = frame;
//   newData.mod1 = mod1;
//   newData.mod2 = mod2;
//   newData.mod3 = mod3;
//   newData.mod4 = mod4;
//   newData.mod5 = mod5;

//   let writeData = JSON.stringify(newData, null, 2);

//   fs.writeFile(edition + ".json", writeData, (err) => {
//     if (err) throw err;
//     console.log(`File ${edition}.json was written...`);
//   });
// });

file1.forEach((element) => {
  console.log(element.attributes);
});
