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

const getDishesParLevels = (dishes) => {
  dishes.forEach((dish) => {
    console.log(dish.dish.parLevels["twoThousand"]);
  });
};
getDishesParLevels(teppanStation);

// document.querySelector("#wokTable").innerHTML = "";
//           wokStation.forEach((object) => {
//             const wokTable = document.createElement("tr");
//             wokTable.innerHTML = `

//                       <th scope="row">${wokCounter}</th>
//                       <td>${object.dish.name}</td>
//                       <td>${object.dish.parLevels.twoThousand}</td>
//            `;
//             document.querySelector("#wokTable").appendChild(wokTable);
