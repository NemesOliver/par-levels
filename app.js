//import Stations data
import teppanStation from "./data/teppanStation.js";
import wokStation from "./data/wokStation.js";
import fryStation from "./data/fryStation.js";

// Get names
const getDishesNames = (dishes) => {
  const names = dishes.map((dish) => dish.dish.name);
  return names;
};

// returns an array with names
const teppanDishesNames = getDishesNames(teppanStation);
const wokDishesNames = getDishesNames(wokStation);
const fryDishesNames = getDishesNames(fryStation);

// Get par levels
const getDishesParLevels = (dishes) => {
  let parLevelsAmounts = [];
  let parLevels = null;
  dishes.forEach((dish) => {
    parLevels = dish.dish.parLevels;
    parLevelsAmounts.push(parLevels);
  });
  return parLevelsAmounts;
};

// returns an array with par levels
const teppanParLevels = getDishesParLevels(teppanStation);
const wokParLevels = getDishesParLevels(wokStation);
const fryParLevels = getDishesParLevels(fryStation);

// get par levels depending on drop down menu selection
const dropDown = document.getElementById("forecast");

const selectParLevels = (section, selection) => {
  let selectedParlevels = [];
  section.forEach((item) => {
    for (const key in item) {
      if (key === selection) {
        selectedParlevels.push(item[key]);
      }
    }
  });
  return selectedParlevels;
};

// logs dish names and parlevels depending on the option selected
const selectAndDisplayOptionTeppan = () => {
  let selectedOption = dropDown.value;
  let arr = selectParLevels(wokParLevels, selectedOption);
  console.log(arr);
  console.log(teppanDishesNames);
};

// dropDown.addEventListener("change", selectAndDisplayOptionTeppan);
