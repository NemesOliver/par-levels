//import Stations data
import teppan from "../data/teppan.js";
import wok from "../data/wok.js";
import fry from "../data/fry.js";

// select dropdown menu
const dropDown = document.querySelector("#drop-down");

const teppanTableId = document.querySelector("#teppanTable");
const wokTableId = document.querySelector("#wokTable");
const fryTableId = document.querySelector("#fryTable");

const createTable = (section, sectionTable) => {
  let option = dropDown.value;
  sectionTable.innerHTML = "";
  section.forEach((dish) => {
    const table = document.createElement("tr");
    table.innerHTML = `
    <th scope="row">1</th>
    <td>${dish.name}</td>
    <td>${dish.parLevels[option]}</td>
    `;
    sectionTable.appendChild(table);
  });
};

const displayTable = () => {
  createTable(wok, wokTableId);
  createTable(teppan, teppanTableId);
  createTable(fry, fryTableId);
};
dropDown.addEventListener("change", displayTable);
