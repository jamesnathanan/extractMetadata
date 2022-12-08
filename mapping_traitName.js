"use strict";

const fs = require("fs");

let file1Raw = fs.readFileSync("./Metadata - 6666/_metadata.json");
let file1 = JSON.parse(file1Raw);

console.log(file1);

const Background = [
  "Bubblegum",
  "Red shadow",
  "Red thunder",
  "Moon",
  "Blue heaven",
  "Sunset mountain",
  "Seaview",
  "Blue thunder",
  "Lime",
  "White thunder"
]

const Phone = [
  "White Cronos single",
  "Sand dual",
  "Moon tripple",
  "Hipster Cronos single",
  "Royal Cronos  single",
  "Green Tripple",
  "Waterslide single",
  "Piano single",
  "Brown cronos single",
  "Royal"
]

const Outfit = [
  "Red cronos jacket",
  "Blue jacket",
  "Grey Cronos jacket",
  "Green Jacket",
  "Pink Jacket",
  "Blue Cronos Jacket",
  "Violet Jacket",
  "Black Cronos Jacket",
  "Yellow jacket",
  "Cronos Vest"
]

const Hair = [
  "Black antenna",
  "Brown crazy",
  "Brown antenna",
  "Blond grazy",
  "Black golf",
  "Blue crazy",
  "Violet Golf",
  "Black short",
  "Black side",
  "Tennis"
]

const Face = [
  "Special 1",
  "Special 2",
  "Hippie",
  "Hipster",
  "Bluetooth white",
  "Gamer",
  "Black earphones",
  "Music",
  "Black earring",
  "Cronos Mask"
]

const Hand = [
  "Black Watch",
  "Gold ring",
  "Double Turmalin Rings",
  "Gold Hero",
  "Blue watch",
  "Black Gold Watch",
  "Smartwatch",
  "Double Gold Ring left",
  "Gold Barcelet",
  "Bangle"
]

const reBackground = (data) => {
  // if(data.attributes[0].value === "1") data.attributes[0].value = Background[0];
  // if(data.attributes[0].value === "2") data.attributes[0].value = Background[1];
  // if(data.attributes[0].value === "3") data.attributes[0].value = Background[2];
  // if(data.attributes[0].value === "4") data.attributes[0].value = Background[3];
  // if(data.attributes[0].value === "5") data.attributes[0].value = Background[4];
  // if(data.attributes[0].value === "6") data.attributes[0].value = Background[5];
  // if(data.attributes[0].value === "7") data.attributes[0].value = Background[6];
  // if(data.attributes[0].value === "8") data.attributes[0].value = Background[7];
  // if(data.attributes[0].value === "9") data.attributes[0].value = Background[8];
  // if(data.attributes[0].value === "10") data.attributes[0].value = Background[9];

  for (let i = 1; i <= 10; i++) {
    if(data.attributes[0].value === `${i}`) data.attributes[0].value = Background[i-1];
  }
}

const rePhone = (data) => {
  for (let i = 1; i <= 10; i++) {
    if(data.attributes[1].value === `${i}`) data.attributes[1].value = Phone[i-1];
  }
}

const reOutfit = (data) => {
  for (let i = 1; i <= 10; i++) {
    if(data.attributes[2].value === `${i}`) data.attributes[2].value = Outfit[i-1];
  }
}

const reHair = (data) => {
  for (let i = 1; i <= 10; i++) {
    if(data.attributes[4].value === `${i}`) data.attributes[4].value = Hair[i-1];
  }
}

const reFace = (data) => {
  for (let i = 1; i <= 10; i++) {
    if(data.attributes[5].value === `${i}`) data.attributes[5].value = Face[i-1];
  }
}

const reHand = (data) => {
  for (let i = 1; i <= 10; i++) {
    if(data.attributes[6].value === `${i}`) data.attributes[6].value = Hand[i-1];
  }
}

file1.forEach((element) => {
  //console.log(element.attributes);
  reBackground(element);
  rePhone(element);
  reOutfit(element);
  reHair(element);
  reFace(element);
  reHand(element);


});

let writeData = JSON.stringify(file1, null, 2);

fs.writeFile("testMetadata.json", writeData, (err) => {
  if (err) throw err;
  console.log(`File was written...`);
});
