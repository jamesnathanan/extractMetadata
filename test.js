"use strict";

const fs = require("fs");

let file1Raw = fs.readFileSync("3.json");
let file1 = JSON.parse(file1Raw);

console.log(file1);

const { name, description, edition } = file1;
console.log("Name: " + name);
console.log("Description: " + description);
console.log("Edition: " + edition);
const frame = file1.attributes[1].value;
const mod1 = file1.attributes[2].value;
const mod2 = file1.attributes[3].value;
const mod3 = file1.attributes[4].value;
const mod4 = file1.attributes[5].value;
const mod5 = file1.attributes[6].value;

console.log(
  `frame: ${frame}, mod1: ${mod1}, mod2: ${mod2}, mod3: ${mod3}, mod4: ${mod4}, mod5: ${mod5}`
);
