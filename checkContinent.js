"use strict";

const fs = require("fs");
const northAmerica = [
  "NEW YORK",
  "MIAMI",
  "LOS ANGELES",
  "LAS VEGAS",
  "HOLLYWOOD",
  "AUSTIN",
  "BOSTON",
  "CANCUN",
  "DALLAS",
  "DENVER",
  "HAVANA",
  "HAWAII",
  "HOUSTON",
  "LONG BEACH",
  "MILWAUKEE",
  "MONTREAL",
  "NEW ORLEANS",
  "PUERTO RICO",
  "SAN FRANCISCO",
  "TORONTO",
  "WASHINGTON",
  "CHICAGO",
  "ATLANTA",
  "DETROIT",
  "EL PASO",
  "INDIANAPOLIS",
  "KANSAS CITY",
  "MEMPHIS",
  "MEXICO CITY",
  "NASHVILLE",
  "ORLANDO",
  "PHILADELPHIA",
  "PHOENIX",
  "PORTLAND",
  "SAN ANTONIO",
  "SAN DIEGO",
  "SAN JOSE",
  "SAN SALVADOR",
  "SEATTLE",
  "COLUMBUS",
];

const asia = [
  "TOKYO",
  "DUBAI",
  "SINGAPORE",
  "SHANGHAI",
  "ABU DHABI",
  "BEIJING",
  "COLOMBO",
  "DELHI",
  "HONG KONG",
  "JERUSALEM",
  "KYOTO",
  "MALDIVES",
  "MECCA",
  "MUMBAI",
  "PHUKET",
  "RIYADH",
  "SHENZHEN",
  "TEL AVIV",
  "SEOUL",
  "XIAMEN",
  "BALI",
  "AGRA",
  "AMRITSAR",
  "ANKARA",
  "BANGKOK",
  "BEIRUT",
  "BUSAN",
  "CHENNAI",
  "CHONGQING",
  "DALIAN",
  "DHAKA",
  "DONGGUAN",
  "MT. EVEREST",
  "GUANGZHOU",
  "HANGZHOU",
  "HANOI",
  "HO CHI MINH CITY",
  "IZMIR",
  "JAIPUR",
  "JAKARTA",
  "JEDDAH",
  "KABUL",
  "KARACHI",
  "KATHMANDU",
  "KAWASAKI",
  "KOBE",
  "KOLKATA",
  "KUALA LUMPUR",
  "KUNMING",
  "LAHORE",
  "MANILA",
  "OSAKA",
  "PUNE",
  "PYONGYANG",
  "SAPPORO",
  "TAIPEI",
  "TEHRAN",
  "TIANJIN",
  "WEIHAI",
  "WUHAN",
  "YOKOHAMA",
];

const europe = [
  "BERLIN",
  "PARIS",
  "LONDON",
  "MOSCOW",
  "MONACO",
  "AMSTERDAM",
  "BARCELONA",
  "BRUSSELS",
  "CANNES",
  "COLOGNE",
  "COPENHAGEN",
  "DUBLIN",
  "DUSSELDORF",
  "FLORENCE",
  "FRANKFURT",
  "HELSINKI",
  "IBIZA",
  "ISTANBUL",
  "LYON",
  "MADRID",
  "MANCHESTER",
  "MARSEILLE",
  "MILAN",
  "MONTE CARLO",
  "MUNICH",
  "MYKONOS",
  "PRAGUE",
  "ROME",
  "ROTTERDAM",
  "SANTORINI",
  "SEVILLE",
  "SOFIA",
  "ST. PETERSBURG",
  "STOCKHOLM",
  "VENICE",
  "VIENNA",
  "WARSAW",
  "ATHENS",
  "BIRMINGHAM",
  "BUCHAREST",
  "BUDAPEST",
  "GLASGOW",
  "HAMBURG",
  "KIEV",
  "LISBON",
  "NAPLES",
  "ODESSA",
  "PORTO",
  "STUTTGART",
  "TURIN",
  "VALENCIA",
  "ZURICH",
];

const africa = [
  "CASABLANCA",
  "DAKAR",
  "JOHANNESBURG",
  "ALEXANDRIA",
  "ALGIERS",
  "CAIRO",
  "CAPE TOWN",
  "DAR ES SALAAM",
  "DURBAN",
  "FREETOWN",
  "GIZA",
  "KHARTOUM",
  "KINSHASA",
  "LAGOS",
  "MOMBASA",
  "MONROVIA",
  "NAIROBI",
  "TRIPOLI",
];

const antarctica = ["ANTARCTICA"];

const oceania = [
  "SYDNEY",
  "MELBOURNE",
  "BORA BORA",
  "GOLD COAST",
  "PERTH",
  "WELLINGTON",
];

const southAmerica = [
  "BOGOTA",
  "BRASILIA",
  "BUENOS AIRES",
  "CARACAS",
  "LIMA",
  "MANAUS",
  "RIO DE JANEIRO",
  "SALVADOR",
  "SANTIAGO",
  "SAO PAULO",
];

const checkContinent = (data) => {
  if (northAmerica.includes(data.attributes[14].value)) {
    data.attributes[0].value = "North America";
    data.attributes[14].trait_type = "North America";
  } else if (asia.includes(data.attributes[14].value)) {
    data.attributes[0].value = "Asia";
    data.attributes[14].trait_type = "Asia";
  } else if (europe.includes(data.attributes[14].value)) {
    data.attributes[0].value = "Europe";
    data.attributes[14].trait_type = "Europe";
  } else if (africa.includes(data.attributes[14].value)) {
    data.attributes[0].value = "Africa";
    data.attributes[14].trait_type = "Africa";
  } else if (antarctica.includes(data.attributes[14].value)) {
    data.attributes[0].value = "Antarctica";
    data.attributes[14].trait_type = "Antarctica";
  } else if (oceania.includes(data.attributes[14].value)) {
    data.attributes[0].value = "Oceania";
    data.attributes[14].trait_type = "Oceania";
  } else if (southAmerica.includes(data.attributes[14].value)) {
    data.attributes[0].value = "South America";
    data.attributes[14].trait_type = "South America";
  }
};

const checkRarity = (data) => {
  for (let i = 0; i < data.attributes.length; i++) {
    if (data.attributes[i].value.includes("(rare)")) {
      data.attributes[7].value = "Rare";
    }
  }
};
const addRarity = (data) => {
  let rareScore = 0;
  if (!data.attributes[7]) {
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
    if (rareItems.includes(data.attributes[6].value)) {
      // check clothing
      rareScore += 1;
    }
  }
  if (rareScore >= 4) {
    data.attributes[7].value = "Extremely Rare";
  } else if (rareScore >= 2 && rareScore < 4) {
    data.attributes[7].value = "Super Rare";
  } else if (rareScore >= 1 && rareScore < 2) {
    data.attributes[7].value = "Rare";
  }
};

let file1Raw = fs.readFileSync("_metadata.json");
let file1 = JSON.parse(file1Raw);

console.log(file1);

file1.forEach((element) => {
  console.log(element.attributes);

  checkContinent(element);
});

file1.forEach((element) => {
  console.log(element.attributes);
});

let writeData = JSON.stringify(file1, null, 2);

fs.writeFile("continentmetadata.json", writeData, (err) => {
  if (err) throw err;
  console.log(`File was written...`);
});
