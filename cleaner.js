"use strict";

const fs = require("fs");

let file1Raw = fs.readFileSync("_metadata.json");
let file1 = JSON.parse(file1Raw);

console.log(file1);

const cleanName = (data) => {
  for (let i = 1; i < data.attributes.length; i++) {
    (data.attributes[i].value.includes("(C)")) ? data.attributes[i].value = data.attributes[i].value.replace("(C)"," ").trim(): null;
    (data.attributes[i].value.includes("(R)")) ? data.attributes[i].value = data.attributes[i].value.replace("(R)"," ").trim(): null;
    (data.attributes[i].value.includes("(UR)")) ? data.attributes[i].value = data.attributes[i].value.replace("(UR)"," ").trim(): null;
    (data.attributes[i].value.includes("_")) ? data.attributes[i].value = data.attributes[i].value.replace("_","-").trim(): null;
    (data.attributes[i].value.includes("none")) ? data.attributes[i].value = data.attributes[i].value.replace("none","NONE").trim(): null;
  }
}

const reName = (data) => {
  for (let i = 1; i < data.attributes.length; i++) {
    // rename
    (data.attributes[i].value === "White&RedCheek+Lips") ? data.attributes[i].value = "SAW King": null;
    (data.attributes[i].value === "High Eyes") ? data.attributes[i].value = "Fried Eyes": null;
    (data.attributes[i].value === "High Wide") ? data.attributes[i].value = "Pealed High Eyes": null;
    (data.attributes[i].value === "Lazy Eyes") ? data.attributes[i].value = "Bored Eyes": null;
    (data.attributes[i].value === "High Eyes ETH") ? data.attributes[i].value = "Bearish ETH Eyes": null;
    (data.attributes[i].value === "High Eyes ThirdEye") ? data.attributes[i].value = "High Third Eye": null;
    (data.attributes[i].value === "High Eyes ThirdEye Beam") ? data.attributes[i].value = "HiBored Abduction Eyes": null;
    (data.attributes[i].value === "Scar+EyePatch") ? data.attributes[i].value = "Eye Patch": null;
    (data.attributes[i].value === "BigTeeth") ? data.attributes[i].value = "Cheesin": null;
    (data.attributes[i].value === "Big Teeth") ? data.attributes[i].value = "Cheesin": null;
    (data.attributes[i].value === "BittingMoney") ? data.attributes[i].value = "Money Talk": null;
    (data.attributes[i].value === "Bitting Money") ? data.attributes[i].value = "Money Talk": null;
    (data.attributes[i].value === "GoldTeeth") ? data.attributes[i].value = "Florida Golds": null;
    (data.attributes[i].value === "Gold Teeth") ? data.attributes[i].value = "Florida Golds": null;
    (data.attributes[i].value === "MissingTeeth&Beard") ? data.attributes[i].value = "Mountaineer": null;
    (data.attributes[i].value === "MissingTeeth and Beard") ? data.attributes[i].value = "Mountaineer": null;
    (data.attributes[i].value === "Moustache") ? data.attributes[i].value = "Trucker Stache": null;
    (data.attributes[i].value === "Diamond Teeth") ? data.attributes[i].value = "Flawless Perms": null;
    (data.attributes[i].value === "DiamondTeeth") ? data.attributes[i].value = "Flawless Perms": null;
    (data.attributes[i].value === "TasmaniaDevil") ? data.attributes[i].value = "Tasmanian Devil": null;
    (data.attributes[i].value === "WeedJointLong") ? data.attributes[i].value = "Extendo": null;
    (data.attributes[i].value === "Weed Joint Long ver") ? data.attributes[i].value = "Extendo": null;
    (data.attributes[i].value === "WeedVapePen") ? data.attributes[i].value = "Dab Pen": null;
    (data.attributes[i].value === "Gandalf Wooden Pipe") ? data.attributes[i].value = "Gandalf Ganja Pipe": null;
    (data.attributes[i].value === "GandalfWoodenPipe") ? data.attributes[i].value = "Gandalf Ganja Pipe": null;
    (data.attributes[i].value === "Tabacco Joint") ? data.attributes[i].value = "Cigarette": null;
    (data.attributes[i].value === "TabaccoJoint") ? data.attributes[i].value = "Cigarette": null;
    (data.attributes[i].value === "Weed Joint") ? data.attributes[i].value = "Backwood Roach": null;
    (data.attributes[i].value === "WeedJoint") ? data.attributes[i].value = "Backwood Roach": null;

  }
}

file1.forEach((element) => {
  //console.log(element.attributes);
  // element.image = element.edition + ".png";
  // element.properties.files[0].uri = element.edition + ".png";
  // element.description = `You may have stumbled upon this through a seemingly random chain of events. Beyond here is something like a utopia - Solana Rats roaming the Metaverse. Many future rewards will be provided to diamond hands for ratting around the NFT community. This is the number ${
  //   element.edition + 1
  // }/999.`;
  // element.collection =
  //   "You may have stumbled upon this through a seemingly random chain of events. Beyond here is something like a utopia - Solana Rats roaming the Metaverse. Many future rewards will be provided to diamond hands for ratting around the NFT community.";
  cleanName(element);
  reName(element);

});

let writeData = JSON.stringify(file1, null, 2);

fs.writeFile("cleanMetadata-2.json", writeData, (err) => {
  if (err) throw err;
  console.log(`File was written...`);
});
