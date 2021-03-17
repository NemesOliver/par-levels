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
const dropDown = document.getElementById("drop-down");

const selectParLevels = (section, selected) => {
  let selectedParlevels = [];
  section.forEach((item) => {
    for (const key in item) {
      if (key === selected) {
        selectedParlevels.push(item[key]);
      }
    }
  });
  return selectedParlevels;
};

// Event Handler
const selectAndDisplay = () => {
  let selection = dropDown.value;
  let wokParLvlsArr = selectParLevels(wokParLevels, selection);
  let teppanParLvlsArr = selectParLevels(teppanParLevels, selection);
  let fryParLvlsArr = selectParLevels(fryParLevels, selection);

  //wok table
  let wokCounter = 1;
  // clear Table
  document.querySelector("#wokTable").innerHTML = "";

  wokDishesNames.forEach((name, index) => {
    // Print data
    const wokTable = document.createElement("tr");
    wokTable.innerHTML = `
    <th scope="row">${wokCounter}</th>
    <td>${name}</td>
    <td>${wokParLvlsArr[index]}</td>
    `;
    document.querySelector("#wokTable").appendChild(wokTable);
    wokCounter += 1;
  });

  //teppan table
  let teppanCounter = 1;
  // clear Table
  document.querySelector("#teppanTable").innerHTML = "";

  teppanDishesNames.forEach((name, index) => {
    // Print data
    const teppanTable = document.createElement("tr");
    teppanTable.innerHTML = `
    <th scope="row">${teppanCounter}</th>
    <td>${name}</td>
    <td>${teppanParLvlsArr[index]}</td>
    `;
    document.querySelector("#teppanTable").appendChild(teppanTable);
    teppanCounter += 1;
  });

  //fry table
  let fryCounter = 1;
  // clear Table
  document.querySelector("#fryTable").innerHTML = "";

  fryDishesNames.forEach((name, index) => {
    // Print data
    const fryTable = document.createElement("tr");
    fryTable.innerHTML = `
    <th scope="row">${fryCounter}</th>
    <td>${name}</td>
    <td>${fryParLvlsArr[index]}</td>
    `;
    document.querySelector("#fryTable").appendChild(fryTable);
    fryCounter += 1;
  });
};
dropDown.addEventListener("change", selectAndDisplay);

// reset table with default option
const resetTable = () => {
  if (dropDown.value === "default") {
    document.querySelector("#wokTable").innerHTML = "";
    document.querySelector("#teppanTable").innerHTML = "";
    document.querySelector("#fryTable").innerHTML = "";
  }
};
dropDown.addEventListener("change", resetTable);
