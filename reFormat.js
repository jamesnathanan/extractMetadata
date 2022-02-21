"use strict";

const fs = require("fs");

// let file1Raw = fs.readFileSync("3.json");
let file1Raw = fs.readFileSync("_metadata.json");
let file1 = JSON.parse(file1Raw);

//console.log(file1);

file1.forEach((element) => {
  const { name, description, edition } = element;
  const rarity = element.attributes[0].value;
  const background = element.attributes[1].value;
  const skin = element.attributes[2].value;
  const top = element.attributes[3].value;
  const chest = element.attributes[4].value;
  const neck = element.attributes[5].value;
  const mouth = element.attributes[6].value;
  const nose = element.attributes[7].value;
  var eyewear = "none";
  var ears = "none";
  var head = "none";
  var over_head = "none";
  var hair = "none";

  console.log(element.attributes[8]);

  for (let i = 8; i < element.attributes.length; i++) {
    if (
      element.attributes[i] &&
      element.attributes[i].trait_type === "Eyewear"
    ) {
      eyewear = element.attributes[i].value;
    }
    if (element.attributes[i] && element.attributes[i].trait_type === "Ears") {
      ears = element.attributes[i].value;
    }
    if (element.attributes[i] && element.attributes[i].trait_type === "Head") {
      head = element.attributes[i].value;
    }
    if (
      element.attributes[i] &&
      element.attributes[i].trait_type === "Over head"
    ) {
      over_head = element.attributes[i].value;
    }
    if (element.attributes[i] && element.attributes[i].trait_type === "Hair") {
      hair = element.attributes[i].value;
    }
  }

  const newData = {};
  newData.name = name;
  newData.description = description;
  newData.edition = edition;
  newData.rarity = rarity;
  newData.background = background;
  newData.skin = skin;
  newData.top = top;
  newData.chest = chest;
  newData.neck = neck;
  newData.mouth = mouth;
  newData.nose = nose;
  newData.eyewear = eyewear;
  newData.ears = ears;
  newData.head = head;
  newData.over_head = over_head;
  newData.hair = hair;

  let writeData = JSON.stringify(newData, null, 2);

  fs.writeFile(edition + ".json", writeData, (err) => {
    if (err) throw err;
    console.log(`File ${edition}.json was written...`);
  });
});

// const { name, description, edition } = file1;
// console.log("Name: " + name);
// console.log("Description: " + description);
// console.log("Edition: " + edition);
// const frame = file1.attributes[1].value;
// const mod1 = file1.attributes[2].value;
// const mod2 = file1.attributes[3].value;
// const mod3 = file1.attributes[4].value;
// const mod4 = file1.attributes[5].value;
// const mod5 = file1.attributes[6].value;

// console.log(
//   `frame: ${frame}, mod1: ${mod1}, mod2: ${mod2}, mod3: ${mod3}, mod4: ${mod4}, mod5: ${mod5}`
// );

// const newData = {};
// newData.name = name;
// newData.description = description;
// newData.edition = edition;
// newData.frame = frame;
// newData.mod1 = mod1;
// newData.mod2 = mod2;
// newData.mod3 = mod3;
// newData.mod4 = mod4;
// newData.mod5 = mod5;

// console.log(newData);

// let writeData = JSON.stringify(newData, null, 2);

// fs.writeFile("test" + edition + ".json", writeData, (err) => {
//   if (err) throw err;
//   console.log("Data written to file");
// });
