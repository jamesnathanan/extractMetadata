"use strict";

const fs = require("fs");

const rareItems = [
  "Body_1",
  "Body_2",
  "Body_5",
  "Body_7",
  "Eyes_144",
  "Clothing_2",
  "Clothing_25",
  "Clothing_84",
  "Headwear_1",
  "Headwear_3",
  "Headwear_14",
  "Headwear_41",
  "MouthWear_N57",
  "MouthWear_N58",
  "MouthWear_N59",
  "MouthWear_N61",
  "MouthWear_N62",
];

const addRarity = (data) => {
  let rareScore = 0;
  if (data.attributes[8]) {
    return;
  } else {
    if (rareItems.includes(data.attributes[1].value)) {
      // check body layer
      rareScore += 1;
      //data.attributes[8].value = "Rare"
    }
    if (rareItems.includes(data.attributes[2].value)) {
      // check eye layer
      rareScore += 1;
    }
    if (rareItems.includes(data.attributes[3].value)) {
      // check headwear
      rareScore += 1;
    }
    if (rareItems.includes(data.attributes[5].value)) {
      // check clothing
      rareScore += 1;
    }
    if (rareItems.includes(data.attributes[6].value)) {
      // check Mouthwear
      rareScore += 1;
    }
  }
  if (rareScore >= 4) {
      data.attributes[8].value = "Extremely Rare"
  } else if ( rareScore >= 2)  && (rareScore < 4) {
      data.attributes[8].value = "Super Rare"
  } else if ( rareScore >=1 ) && (rareScore < 2) {
      data.attributes[8].value = "Rare"
  }
};

let file1Raw = fs.readFileSync("test.json");
let file1 = JSON.parse(file1Raw);

console.log(file1)

file1.forEach((element) => {
    console.log(element.attributes);

    addRarity(element)    

})

file1.forEach((element) => {
    console.log(element.attributes);
  });
  
  let writeData = JSON.stringify(file1, null, 2);
  
  fs.writeFile("test.json", writeData, (err) => {
    if (err) throw err;
    console.log(`File was written...`);
  });
