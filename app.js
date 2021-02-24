//import Stations data
import teppanStation from "./data/teppanStation.js";
import wokStation from "./data/wokStation.js";
import fryStation from "./data/fryStation.js";

// add prep levels to table with switch statement
const printPrepLevels = () => {
  let wokCounter = 1;
  let teppanCounter = 1;
  let fryCounter = 1;
  const dropDown = document.getElementById("forecast");
  dropDown.addEventListener("change", () => {
    //switch statement for dropdown menu
    switch (dropDown.value) {
      case "2k":
        // Wok
        // check if table is empty
        if (document.querySelector("#wokTable").innerHTML === "") {
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.twoThousand}</td>
           `;
            document.querySelector("#wokTable").appendChild(wokTable);
            wokCounter += 1;
          });
        } else {
          wokCounter = 1;
          document.querySelector("#wokTable").innerHTML = "";
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.twoThousand}</td>
           `;
            document.querySelector("#wokTable").appendChild(wokTable);
            wokCounter += 1;
          });
        }
        // teppan
        if (document.querySelector("#teppanTable").innerHTML === "") {
          teppanStation.forEach((object) => {
            const teppanTable = document.createElement("tr");
            teppanTable.innerHTML = `
  
                        <th scope="row">${teppanCounter}</th>
                        <td>${object.dish.name}</td>
                        <td>${object.dish.parLevels.twoThousand}</td>
             `;
            document.querySelector("#teppanTable").appendChild(teppanTable);
            teppanCounter += 1;
          });
        } else {
          teppanCounter = 1;
          document.querySelector("#teppanTable").innerHTML = "";
          teppanStation.forEach((object) => {
            const teppanTable = document.createElement("tr");
            teppanTable.innerHTML = `
  
                        <th scope="row">${teppanCounter}</th>
                        <td>${object.dish.name}</td>
                        <td>${object.dish.parLevels.twoThousand}</td>
             `;
            document.querySelector("#teppanTable").appendChild(teppanTable);
            teppanCounter += 1;
          });
        }
        // fry
        if (document.querySelector("#fryTable").innerHTML === "") {
          fryStation.forEach((object) => {
            const fryTable = document.createElement("tr");
            fryTable.innerHTML = `
  
                        <th scope="row">${fryCounter}</th>
                        <td>${object.dish.name}</td>
                        <td>${object.dish.parLevels.twoThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        } else {
          fryCounter = 1;
          document.querySelector("#fryTable").innerHTML = "";
          fryStation.forEach((object) => {
            const fryTable = document.createElement("tr");
            fryTable.innerHTML = `
  
                        <th scope="row">${fryCounter}</th>
                        <td>${object.dish.name}</td>
                        <td>${object.dish.parLevels.twoThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        }
        break;
      case "3k":
        // copy code from 2k option
        console.log(3000);
        break;
      case "4k":
        console.log(4000);
        break;
      case "5k":
        console.log(5000);
        break;
      case "6k":
        console.log(6000);
        break;
      case "7k":
        console.log(7000);
        break;
      case "8k":
        console.log(8000);
        break;
      case "9k":
        console.log(9000);
        break;
      case "10k":
        console.log(10000);
        break;
      case "11k":
        console.log(11000);
        break;
      case "12k":
        console.log(12000);
        break;
      default:
        document.querySelector("#wokTable").innerHTML = "";
        document.querySelector("#teppanTable").innerHTML = "";
        document.querySelector("#fryTable").innerHTML = "";
        wokCounter = 1;
        teppanCounter = 1;
        fryCounter = 1;
        break;
    }
  });
};
console.log();
printPrepLevels();
