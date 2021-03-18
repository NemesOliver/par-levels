//array of teppan dishes
const teppan = [
  {
    name: "Yaki soba",
    parLevels: {
      twoThousand: 15,
      threeThousand: 20,
      fourThousand: 25,
      fiveThousand: 30,
      sixThousand: 30,
      sevenThousand: 35,
      eightThousand: 45,
      nineThousand: 60,
      tenThousand: 65,
      elevenThousand: 70,
      twelveThousand: 80,
    },
  },
  {
    name: "Yasai Yaki soba",
    parLevels: {
      twoThousand: 5,
      threeThousand: 7,
      fourThousand: 10,
      fiveThousand: 15,
      sixThousand: 15,
      sevenThousand: 20,
      eightThousand: 20,
      nineThousand: 20,
      tenThousand: 25,
      elevenThousand: 30,
      twelveThousand: 30,
    },
  },
  {
    name: "Pad thai",
    parLevels: {
      twoThousand: 20,
      threeThousand: 25,
      fourThousand: 40,
      fiveThousand: 40,
      sixThousand: 50,
      sevenThousand: 55,
      eightThousand: 65,
      nineThousand: 70,
      tenThousand: 80,
      elevenThousand: 90,
      twelveThousand: 95,
    },
  },
  {
    name: "Teriyaki soba",
    parLevels: {
      twoThousand: 10,
      threeThousand: 15,
      fourThousand: 20,
      fiveThousand: 20,
      sixThousand: 25,
      sevenThousand: 25,
      eightThousand: 30,
      nineThousand: 35,
      tenThousand: 40,
      elevenThousand: 40,
      twelveThousand: 45,
    },
  },
  {
    name: "Yaki udon",
    parLevels: {
      twoThousand: 8,
      threeThousand: 10,
      fourThousand: 15,
      fiveThousand: 15,
      sixThousand: 20,
      sevenThousand: 20,
      eightThousand: 25,
      nineThousand: 25,
      tenThousand: 30,
      elevenThousand: 35,
      twelveThousand: 35,
    },
  },
  {
    name: "Ginger chicken",
    parLevels: {
      twoThousand: 6,
      threeThousand: 8,
      fourThousand: 10,
      fiveThousand: 12,
      sixThousand: 15,
      sevenThousand: 20,
      eightThousand: 25,
      nineThousand: 25,
      tenThousand: 30,
      elevenThousand: 35,
      twelveThousand: 35,
    },
  },
];

//array of wok dishes
const wok = [
  {
    name: "Raisukaree",
    parLevels: {
      twoThousand: 10,
      threeThousand: 15,
      fourThousand: 20,
      fiveThousand: 20,
      sixThousand: 25,
      sevenThousand: 30,
      eightThousand: 35,
      nineThousand: 40,
      tenThousand: 45,
      elevenThousand: 50,
      twelveThousand: 55,
    },
  },
  {
    name: "Firecracker",
    parLevels: {
      twoThousand: 10,
      threeThousand: 15,
      fourThousand: 20,
      fiveThousand: 25,
      sixThousand: 30,
      sevenThousand: 35,
      eightThousand: 40,
      nineThousand: 45,
      tenThousand: 50,
      elevenThousand: 55,
      twelveThousand: 60,
    },
  },
  {
    name: "Mixed mushrooms",
    parLevels: {
      twoThousand: 10,
      threeThousand: 12,
      fourThousand: 15,
      fiveThousand: 15,
      sixThousand: 15,
      sevenThousand: 20,
      eightThousand: 25,
      nineThousand: 25,
      tenThousand: 30,
      elevenThousand: 35,
      twelveThousand: 35,
    },
  },
  {
    name: "Wok greens",
    parLevels: {
      twoThousand: 7,
      threeThousand: 10,
      fourThousand: 12,
      fiveThousand: 15,
      sixThousand: 15,
      sevenThousand: 20,
      eightThousand: 20,
      nineThousand: 25,
      tenThousand: 25,
      elevenThousand: 30,
      twelveThousand: 35,
    },
  },
];

//array of fry dishes
const fry = [
  {
    name: "Chicken katsu",
    parLevels: {
      twoThousand: 1,
      threeThousand: 1,
      fourThousand: 2,
      fiveThousand: 2,
      sixThousand: 3,
      sevenThousand: 3,
      eightThousand: 3,
      nineThousand: 4,
      tenThousand: 4,
      elevenThousand: 5,
      twelveThousand: 5,
    },
  },
  {
    name: "Yasai katsu",
    parLevels: {
      twoThousand: 1,
      threeThousand: 1,
      fourThousand: 2,
      fiveThousand: 2,
      sixThousand: 2,
      sevenThousand: 2,
      eightThousand: 2,
      nineThousand: 3,
      tenThousand: 3,
      elevenThousand: 3,
      twelveThousand: 3,
    },
  },
  {
    name: "Panko seitan",
    parLevels: {
      twoThousand: 5,
      threeThousand: 8,
      fourThousand: 10,
      fiveThousand: 10,
      sixThousand: 10,
      sevenThousand: 15,
      eightThousand: 15,
      nineThousand: 20,
      tenThousand: 20,
      elevenThousand: 25,
      twelveThousand: 25,
    },
  },
  {
    name: "Chilli squid",
    parLevels: {
      twoThousand: 4,
      threeThousand: 4,
      fourThousand: 8,
      fiveThousand: 8,
      sixThousand: 8,
      sevenThousand: 8,
      eightThousand: 10,
      nineThousand: 10,
      tenThousand: 15,
      elevenThousand: 15,
      twelveThousand: 15,
    },
  },
  {
    name: "Ebi katsu",
    parLevels: {
      twoThousand: 1,
      threeThousand: 1,
      fourThousand: 1,
      fiveThousand: 1,
      sixThousand: 1,
      sevenThousand: 2,
      eightThousand: 2,
      nineThousand: 2,
      tenThousand: 3,
      elevenThousand: 3,
      twelveThousand: 4,
    },
  },
  {
    name: "Duck gyoza",
    parLevels: {
      twoThousand: 1,
      threeThousand: 1,
      fourThousand: 2,
      fiveThousand: 2,
      sixThousand: 2,
      sevenThousand: 3,
      eightThousand: 3,
      nineThousand: 3,
      tenThousand: 4,
      elevenThousand: 5,
      twelveThousand: 6,
    },
  },
  {
    name: "Ebi gyoza",
    parLevels: {
      twoThousand: 10,
      threeThousand: 10,
      fourThousand: 40,
      fiveThousand: 40,
      sixThousand: 40,
      sevenThousand: 50,
      eightThousand: 60,
      nineThousand: 90,
      tenThousand: 90,
      elevenThousand: 120,
      twelveThousand: 120,
    },
  },
];

// traversing obj with one dish
const dropDown = document.querySelector("#drop-down");
const getOptionValue = () => {
  let option = dropDown.value;
  teppan.forEach((dish) =>
    console.log(`Name: ${dish.name}, prep level: ${dish.parLevels[option]}`)
  );
  wok.forEach((dish) =>
    console.log(`Name: ${dish.name}, prep level: ${dish.parLevels[option]}`)
  );
  fry.forEach((dish) =>
    console.log(`Name: ${dish.name}, prep level: ${dish.parLevels[option]}`)
  );
};
dropDown.addEventListener("change", getOptionValue);
