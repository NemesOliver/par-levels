//import Stations data
import teppan from "../data/teppan.js";
import wok from "../data/wok.js";
import fry from "../data/fry.js";

// select dropdown menu
const dropDown = document.querySelector("#drop-down");

// select individual section html table element
const teppanTableId = document.querySelector("#teppanTable");
const wokTableId = document.querySelector("#wokTable");
const fryTableId = document.querySelector("#fryTable");

const createTable = (section, sectionTable) => {
  let counter = 1;
  let option = dropDown.value;
  sectionTable.innerHTML = "";
  if (option === "default") {
    sectionTable.innerHTML = "";
  } else {
    section.forEach((dish) => {
      const table = document.createElement("tr");
      table.innerHTML = `
        <th scope="row">${counter}</th>
        <td>${dish.name}</td>
        <td>${dish.parLevels[option]}</td>
        `;
      sectionTable.appendChild(table);
      counter += 1;
    });
  }
};

const displayTable = () => {
  createTable(wok, wokTableId);
  createTable(teppan, teppanTableId);
  createTable(fry, fryTableId);
};
// listen for change
dropDown.addEventListener("change", displayTable);