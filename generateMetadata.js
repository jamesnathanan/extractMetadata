"use strict";

const fs = require("fs");

// let file1Raw = fs.readFileSync("_metadata.json");
// let file1 = JSON.parse(file1Raw);

// console.log(file1);

// file1.forEach((element) => {
//   //console.log(element.attributes);
//   // element.image = element.edition + ".png";
//   // element.properties.files[0].uri = element.edition + ".png";
  
// });
let special_1638 = "X The Peaceful Frog ( Remarkable FA ) 1638"

const _metadata = []

const checkAnimal = (number) => {
  let animal = "";
  if (number < 344) {
    animal = "Turtles"
    return animal;
  } else if (number < 687) {
    animal = "Owls"
    return animal;
  } else if (number < 1030) {
    animal = "Lizards"
    return animal;
  } else if (number < 1373) {
    animal = "Ladybugs" 
    return animal;
  } else if (number < 1716) {
    animal = "Frogs"
    return animal;
  } else if (number < 2059) {
    animal = "Fish"
    return animal;
  } else {
    animal = "Beetles"
    return animal;
  }
}

const checkRarityTurtles = (number) => {
  if (number < 99) {
    return "Fascinating";
  } else if (number < 100) {
    return "Mythical";
  } else if (number < 295) {
    return "Remarkable"
  } else {
    return "Sensational"
  }
}

const checkRarityOwls = (number) => {
  if (number < 442) {
    return "Fascinating";
  } else if (number < 443) {
    return "Mythical";
  } else if (number < 638) {
    return "Remarkable"
  } else {
    return "Sensational"
  }
}

const checkRarityLizards = (number) => {
  if (number < 785) {
    return "Fascinating"
  } else if (number < 786) {
    return "Mythical"
  } else if (number < 981) {
    return "Remarkable"
  } else {
    return "Sensational"
  }
}

const checkRarityLadybugs = (number) => {
  if (number < 1128) {
    return "Fascinating"
  } else if (number < 1129) {
    return "Mythical"
  } else if (number < 1324) {
    return "Remarkable"
  } else {
    return "Sensational"
  }
}

const checkRarityFrogs = (number) => {
  if (number < 1471) {
    return "Fascinating"
  } else if (number < 1472) {
    return "Mythical"
  } else if (number < 1667) {
    return "Remarkable"
  } else {
    return "Sensational"
  }
}

const checkRarityFish = (number) => {
  if (number < 1814) {
    return "Fascinating"
  } else if (number < 1815) {
    return "Mythical"
  } else if (number < 2010) {
    return "Remarkable"
  } else {
    return "Sensational"
  }
}

const checkRarityBeetles = (number) => {
  if (number < 2157) {
    return "Fascinating"
  } else if (number < 2158) {
    return "Mythical"
  } else if (number < 2353) {
    return "Remarkable"
  } else {
    return "Sensational"
  }
}

const checkNameTurtles = (number) => {
  if (number < 15) {
    return "The Patient Turtle"
  } else if (number < 29) {
    return "The Perseverant Turtle"
  } else if (number < 43) {
    return "The Protective Turtle"
  } else if (number < 57) {
    return "The Stable Turtle"
  } else if (number < 71) {
    return "The Strong Turtle"
  } else if (number < 85) {
    return "The Transformative Turtle"
  } else if (number < 99) {
    return "The Wise Turtle"
  } else if (number < 100) {
    return "The Protective Turtle"
  } else if (number < 128) {
    return "The Patient Turtle"
  } else if (number < 156) {
    return "The Perseverant Turtle"
  } else if (number < 183) {
    return "The Protective Turtle"
  } else if (number < 211) {
    return "The Stable Turtle"
  } else if (number < 239) {
    return "The Strong Turtle"
  } else if (number < 267) {
    return "The Transformative Turtle"
  } else if (number < 295) {
    return "The Wise Turtle"
  } else if (number < 302) {
    return "The Patient Turtle"
  } else if (number < 309) {
    return "The Perseverant Turtle"
  } else if (number < 316) {
    return "The Protective Turtle"
  } else if (number < 323) {
    return "The Stable Turtle"
  } else if (number < 330) {
    return "The Strong Turtle"
  } else if (number < 337) {
    return "The Transformative Turtle"
  } else {
    return "The Wise Turtle"
  }
}

const checkNameOwls = (number) => {
  
  if (number < 358) {
    return "The Wealthy Owl"
  } else if (number < 372) {
    return "The Agile Owl"
  } else if (number < 386) {
    return "The Courageous Owl"
  } else if (number < 400) {
    return "The Intutive Owl"
  } else if (number < 414) {
    return "The Prorsperous Owl"
  } else if (number < 428) {
    return "The Protector Owl"
  } else if (number < 442) {
    return "The Wise Owl"
  } else if (number < 443) {
    return "The Courageous Owl"
  } else if (number < 471) {
    return "The Wealthy Owl"
  } else if (number < 499) {
    return "The Agile Owl"
  } else if (number < 526) {
    return "The Courageous Owl"
  } else if (number < 554) {
    return "The Intutive Owl"
  } else if (number < 582) {
    return "The Prorsperous Owl"
  } else if (number < 610) {
    return "The Protector Owl"
  } else if (number < 638) {
    return "The Wise Owl"
  } else if (number < 645) {
    return "The Wealthy Owl"
  } else if (number < 652) {
    return "The Agile Owl"
  } else if (number < 659) {
    return "The Courageous Owl"
  } else if (number < 666) {
    return "The Intutive Owl"
  } else if (number < 673) {
    return "The Prorsperous Owl"
  } else if (number < 680) {
    return "The Protector Owl"
  } else {
    return "The Wise Owl"
  }
}

const checkNameLizards = (number) => {
  if (number < 701) {
    return "The Intuitive Lizard"
  } else if (number < 715) {
    return "The Powerful Lizard"
  } else if (number < 729) {
    return "The Protector Lizard"
  } else if (number < 743) {
    return "The Reborn Lizard"
  } else if (number < 757) {
    return "The Regenerated Lizard"
  } else if (number < 771) {
    return "The Renewed Lizard"
  } else if (number < 785) {
    return "The Strong Lizard"
  } else if (number < 786) {
    return "The Powerful Lizard"
  } else if (number < 814) {
    return "The Intuitive Lizard"
  } else if (number < 851) {
    return "The Powerful Lizard"
  } else if (number < 869) {
    return "The Protector Lizard"
  } else if (number < 897) {
    return "The Reborn Lizard"
  } else if (number < 925) {
    return "The Regenerated Lizard"
  } else if (number < 953) {
    return "The Renewed Lizard"
  } else if (number < 981) {
    return "The Strong Lizard"
  } else if (number < 988) {
    return "The Intuitive Lizard"
  } else if (number < 995) {
    return "The Powerful Lizard"
  } else if (number < 1002) {
    return "The Protector Lizard"
  } else if (number < 1009) {
    return "The Reborn Lizard"
  } else if (number < 1016) {
    return "The Regenerated Lizard"
  } else if (number < 1023) {
    return "The Renewed Lizard"
  } else {
    return "The Strong Lizard"
  }
}

const checkNameLadyBugs = (number) => {
  if (number < 1044) {
    return "The Innocent Ladybug"
  } else if (number < 1058) {
    return "The Positive Ladybug"
  } else if (number < 1072) {
    return "The Prosperous Ladybug"
  } else if (number < 1086) {
    return "The Protective Ladybug"
  } else if (number < 1100) {
    return "The Reborn Ladybug"
  } else if (number < 1114) {
    return "The Regenerated Ladybug"
  } else if (number < 1128) {
    return "The Spiritual Ladybug"
  } else if (number < 1129) {
    return "The Positive Ladybug"
  } else if (number < 1157) {
    return "The Innocent Ladybug"
  } else if (number < 1184) {
    return "The Positive Ladybug"
  } else if (number < 1212) {
    return "The Prosperous Ladybug"
  } else if (number < 1240) {
    return "The Protective Ladybug"
  } else if (number < 1268) {
    return "The Reborn Ladybug"
  } else if (number < 1296) {
    return "The Regenerated Ladybug"
  } else if (number < 1324) {
    return "The Spiritual Ladybug"
  } else if (number < 1331) {
    return "The Innocent Ladybug"
  } else if (number < 1338) {
    return "The Positive Ladybug"
  } else if (number < 1345) {
    return "The Prosperous Ladybug"
  } else if (number < 1352) {
    return "The Protective Ladybug"
  } else if (number < 1359) {
    return "The Reborn Ladybug"
  } else if (number < 1366) {
    return "The Regenerated Ladybug"
  } else {
    return "The Spiritual Ladybug"
  }
}

const checkNameFrogs = (number) => {
  if (number < 1387) {
    return "The Fertile Frog"
  } else if (number < 1401) {
    return "The Peaceful Frog"
  } else if (number < 1415) {
    return "The Prosperous Frog"
  } else if (number < 1429) {
    return "The Pure Frog"
  } else if (number < 1443) {
    return "The Reborn Frog"
  } else if (number < 1457) {
    return "The Renewed Frog"
  } else if (number < 1470) {
    return "The Transformative Frog"
  } else if (number < 1472) {
    return "The Renewed Frog"
  } else if (number < 1500) {
    return "The Fertile Frog"
  } else if (number < 1527) {
    return "The Peaceful Frog"
  } else if (number < 1555) {
    return "The Prosperous Frog"
  } else if (number < 1583) {
    return "The Pure Frog"
  } else if (number < 1611) {
    return "The Reborn Frog"
  } else if (number < 1638) {
    return "The Renewed Frog"
  } else if (number < 1639) {
    return "X The Peaceful Frog"
  } else if (number < 1667) {
    return "The Transformative Frog"
  } else if (number < 1674) {
    return "The Fertile Frog"
  } else if (number < 1681) {
    return "The Peaceful Frog"
  } else if (number < 1688) {
    return "The Prosperous Frog"
  } else if (number < 1695) {
    return "The Pure Frog"
  } else if (number < 1702) {
    return "The Reborn Frog"
  } else if (number < 1709){
    return "The Renewed Frog"
  } else {
    return "The Transformative Frog"
  }
}

const checkNameFish = (number) => {
  if (number < 1730) {
    return "The Abundant Fish"
  } else if (number < 1744) {
    return "The Fertile Fish"
  } else if (number < 1758) {
    return "The Harmonious Fish"
  } else if (number < 1772) {
    return "The Healthy Fish"
  } else if (number < 1786) {
    return "The Positive Fish"
  } else if (number < 1800) {
    return "The Prosperous Fish"
  } else if (number < 1814) {
    return "The Wealthy Fish"
  } else if (number < 1815) {
    return "The Healthy Fish"
  } else if (number < 1843) {
    return "The Abundant Fish"
  } else if (number < 1871) {
    return "The Fertile Fish"
  } else if (number < 1899) {
    return "The Harmonious Fish"
  } else if (number < 1926) {
    return "The Healthy Fish"
  } else if (number < 1954) {
    return "The Positive Fish"
  } else if (number < 1982) {
    return "The Prosperous Fish"
  } else if (number < 2010) {
    return "The Wealthy Fish"
  } else if (number < 2017) {
    return "The Abundant Fish"
  } else if (number < 2024) {
    return "The Fertile Fish"
  } else if (number < 2031) {
    return "The Harmonious Fish"
  } else if (number < 2038) {
    return "The Healthy Fish"
  } else if (number < 2045) {
    return "The Positive Fish"
  } else if (number < 2052) {
    return "The Prosperous Fish"
  } else {
    return "The Wealthy Fish"
  }
}

const checkNameBeetles = (number) => {
  if (number < 2073) {
    return "The Creative Beetle"
  } else if (number < 2087) {
    return "The Persistent Beetle"
  } else if (number < 2101) {
    return "The Reborn Beetle"
  } else if (number < 2115) {
    return "The Regenerated Beetle"
  } else if (number < 2129) {
    return "The Renewed Beetle"
  } else if (number < 2143) {
    return "The Strong Beetle"
  } else if (number < 2157) {
    return "The Transformational Beetle"
  } else if (number < 2158) {
    return "The Reborn Beetle"
  } else if (number < 2186) {
    return "The Creative Beetle"
  } else if (number < 2214) {
    return "The Persistent Beetle"
  } else if (number < 2241) {
    return "The Reborn Beetle"
  } else if (number < 2269) {
    return "The Regenerated Beetle"
  } else if (number < 2297) {
    return "The Renewed Beetle"
  } else if (number < 2325) {
    return "The Strong Beetle"
  } else if (number < 2353) {
    return "The Tranformational Beetle"
  } else if (number < 2360) {
    return "The Creative Beetle"
  } else if (number < 2367) {
    return "The Persistent Beetle"
  } else if (number < 2374) {
    return "The Reborn Beetle"
  } else if (number < 2381) {
    return "The Regenerated Beetle"
  } else if (number < 2388) {
    return "The Renewed Beetle"
  } else if (number < 2395) {
    return "The Strong Beetle"
  } else {
    return "The Tranformational Beetle"
  }
}

for (let i = 1; i < 2402; i++) {
  const element = {}
  element.edition = i;
  element.animal = checkAnimal(i);

  if (element.animal === "Turtles") {
    element.rarity = checkRarityTurtles(i)
    element.name = checkNameTurtles(i)
    //element.fullname = element.name + " ( " + element.rarity + " FA )"
    element.fullname = `${element.name} ( ${element.rarity} FA )`
  }

  if (element.animal === "Owls") {
    element.rarity = checkRarityOwls(i)
    element.name = checkNameOwls(i)
    element.fullname = `${element.name} ( ${element.rarity} FA )`

  }

  if (element.animal === "Lizards") {
    element.rarity = checkRarityLizards(i)
    element.name = checkNameLizards(i)
    element.fullname = `${element.name} ( ${element.rarity} FA )`
  }

  if (element.animal === "Ladybugs") {
    element.rarity = checkRarityLadybugs(i)
    element.name = checkNameLadyBugs(i)
    element.fullname = `${element.name} ( ${element.rarity} FA )`

  }

  if (element.animal === "Frogs") {
    element.rarity = checkRarityFrogs(i)
    element.name = checkNameFrogs(i)
    element.fullname = `${element.name} ( ${element.rarity} FA )`
  }

  if (element.animal === "Fish") {
    element.rarity = checkRarityFish(i)
    element.name = checkNameFish(i)
    element.fullname = `${element.name} ( ${element.rarity} FA )`
  }

  if (element.animal === "Beetles") {
    element.rarity = checkRarityBeetles(i)
    element.name = checkNameBeetles(i)
    element.fullname = `${element.name} ( ${element.rarity} FA )`
  }

  const reFormatData = {}

  reFormatData.name = element.fullname + " " + element.edition
  reFormatData.edition = element.edition
  reFormatData.image = element.fullname + " " + element.edition +".jpg"
  const attributes = []
  attributes.push(
      {
        "trait_type": "Animal",
        "value": element.animal
      }
    );
  attributes.push(
      {
        "trait_type": "Rarity",
        "value": element.rarity
      }
    );
  attributes.push(
      {
        "trait_type": "Name",
        "value": element.name
      }
    )
  reFormatData.attributes = attributes

  _metadata.push(reFormatData)
}



let writeData = JSON.stringify(_metadata, null, 2);

fs.writeFile("./newMetadata/_metadata-2.json", writeData, (err) => {
  if (err) throw err;
  console.log(`File was written...`);
});
