//import Stations data
import teppanStation from "./data/teppanStation.js";
import wokStation from "./data/wokStation.js";
import fryStation from "./data/fryStation.js";

const getDishesNames = (dishes) => {
  let names = [];
  dishes.forEach((dish) => {
    names.push(dish.dish.name);
  });
  return names;
};

// returns an array
const teppanDishesNames = getDishesNames(teppanStation);
const wokDishesNames = getDishesNames(wokStation);
const fryDishesNames = getDishesNames(fryStation);

