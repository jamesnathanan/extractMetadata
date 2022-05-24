"use strict";

const fs = require("fs");

const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory
const imageDirPath = resolve(__dirname, 'images');

const _metadata = [];

// function to check Attributes
const checkAnimal = (name) => {
  if (name.includes("Turtle")) {
    return "Turtles";
  } else if(name.includes("Owl")) {
    return "Owls";
  } else if (name.includes("Lizard")) {
    return "Lizards"
  } else if (name.includes("Ladybug")) {
    return "Ladybugs"
  } else if (name.includes("Frogs")) {
    return "Frogs"
  } else if (name.includes("Fish")) {
    return "Fish"
  } else {
    return "Beetles"
  }
}

const checkRarity = (name) => {
  if (name.includes("Fascinating")) {
    return "Fascinating"
  } else if (name.includes("Remarkable")) {
    return "Remarkable"
  } else if (name.includes("Sensational")) {
    return "Sensational"
  }
}

const checkName = (name) => {
  name = name.replaceAll('(','');
  name = name.replaceAll(')','');
  name = name.replaceAll(' FA ', '');
  name = name.replace('Fascinating','')
  name = name.replace('Remarkable','')
  name = name.replace('Sensational','')
  name = name.trim();
  return name;
}

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

//Loop through each file that was retrieved
files.forEach(file => {
  let edition = file.replace(/[^\d.]/g, '')
  edition = edition.replace(".","").trim();
  edition = parseInt(edition);
  let name = file.replace(/\d/g, "");
  name = name.replace("X ","");
  name = name.replace(".jpg","").trim();
  
  let image = ""
  let attributes = [
    {
      "trait_type": "Animal",
      "value": "NullAnimal"
    },
    {
      "trait_type": "Rarity",
      "value": "NullRarity"
    },
    {
      "trait_type": "Name",
      "value": "NullName"
    }
  ]

  attributes[0].value = checkAnimal(name);
  attributes[1].value = checkRarity(name);
  attributes[2].value = checkName(name);

  console.log(name);
  console.log(edition);
  console.log(attributes);

  const metadata = {}
  metadata.name = name + " #" + edition;
  metadata.edition = edition;
  metadata.image = "/" + edition + ".jpg";
  metadata.attributes = attributes;

  _metadata.push(metadata);

  //console.log(onlyNumber) /// '123.'
  // rename(
  // imageDirPath + `/${file}`,
  // imageDirPath + `/${onlyNumber}jpg`,
  // err => console.log(err)
  // )
});

// console.log(`There are ${files.length} elements`)
// console.log(files)

// let file1Raw = fs.readFileSync("_metadata.json");
// let file1 = JSON.parse(file1Raw);

// console.log(file1);

// file1.forEach((element) => {
//   //console.log(element.attributes);
  
// });

let writeData = JSON.stringify(_metadata, null, 2);

fs.writeFile("./order2/_metadata.json", writeData, (err) => {
  if (err) throw err;
  console.log(`File was written...`);
});
