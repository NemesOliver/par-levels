//import Stations data
import teppanStation from "./data/teppanStation.js";
import wokStation from "./data/wokStation.js";
import fryStation from "./data/fryStation.js";

// Get names
const getDishesNames = (dishes) => {
  let names = [];
  dishes.forEach((dish) => {
    let name = dish.dish.name;
    names.push(name);
  });
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

const selectParLevels = (section) => {
  let selectedParlevels = [];

  section.forEach((item) => {
    for (const key in item) {
      if (key === "sevenThousand") {
        selectedParlevels.push(item[key]);
      }
    }
  });
  return selectedParlevels;
};
selectParLevels(teppanParLevels);
