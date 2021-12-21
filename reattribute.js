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

const renameBG = (data) => {
  if (data.attributes[0].value === "Background 01") {
    data.attributes[0].value = "Light Grey Green";
  }
  if (data.attributes[0].value === "Background 02") {
    data.attributes[0].value = "Blossom";
  }
  if (data.attributes[0].value === "Background 03") {
    data.attributes[0].value = "Mint Green";
  }
  if (data.attributes[0].value === "Background 04") {
    data.attributes[0].value = "Lilac";
  }
  if (data.attributes[0].value === "Background 05") {
    data.attributes[0].value = "Light Khaki";
  }
  if (data.attributes[0].value === "Background 06") {
    data.attributes[0].value = "Parchment";
  }
  if (data.attributes[0].value === "Background 07") {
    data.attributes[0].value = "Gum Leaf";
  }
  if (data.attributes[0].value === "Background 08") {
    data.attributes[0].value = "Dark Sky Blue";
  }
  if (data.attributes[0].value === "Background 09") {
    data.attributes[0].value = "Coral";
  }
  if (data.attributes[0].value === "Background 10") {
    data.attributes[0].value = "Ghost";
  }
};

const deleteFront = (data) => {
  if (data.attributes[3].value[0] === " ") {
    data.attributes[3].value = data.attributes[3].value.slice(1);
  }
  if (data.attributes[4].value[0] === " ") {
    data.attributes[4].value = data.attributes[4].value.slice(1);
  }
};

const addRarity = (data) => {
  if (data.attributes[5]) {
    return;
  } else {
    if (rareAccess.includes(data.attributes[4].value)) {
      data.attributes.push({ trait_type: "RARITY", value: "Rare" });
    } else if (rareBody.includes(data.attributes[3].value)) {
      data.attributes.push({ trait_type: "RARITY", value: "Rare" });
    } else {
      data.attributes.push({ trait_type: "RARITY", value: "Uncommon" });
    }
  }
};

const addLegend = (data) => {
  if (data.attributes[5] && data.attributes[0].value === "Legendary") {
    data.attributes[5].value = "Legendary";
  }
};

// let file1Raw = fs.readFileSync("3.json");
let file1Raw = fs.readFileSync("test.json");
let file1 = JSON.parse(file1Raw);

console.log(file1);

file1.forEach((element) => {
  console.log(element.attributes);

  //   if (element.attributes[0].value === "Background 01") {
  //     element.attributes[0].value = "Black";
  //   }
  //   if (element.attributes[0].value === "Background 02") {
  //     element.attributes[0].value = "White";
  //   }
  //   if (element.attributes[0].value === "Background 03") {
  //     element.attributes[0].value = "Grey";
  //   }
  renameBG(element);
  deleteFront(element);
  addRarity(element);
  addLegend(element);
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

let writeData = JSON.stringify(file1, null, 2);

fs.writeFile("test.json", writeData, (err) => {
  if (err) throw err;
  console.log(`File was written...`);
});
