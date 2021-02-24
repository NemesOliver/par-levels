//import Stations data
import teppanStation from "./data/teppanStation.js";
import wokStation from "./data/wokStation.js";
import fryStation from "./data/fryStation.js";

// add prep levels to table with switch statement
const printPrepLevels = () => {
  console.log(wokStation);
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
        // Wok
        // check if table is empty
        if (document.querySelector("#wokTable").innerHTML === "") {
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.threeThousand}</td>
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
                      <td>${object.dish.parLevels.threeThousand}</td>
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
                        <td>${object.dish.parLevels.threeThousand}</td>
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
                        <td>${object.dish.parLevels.threeThousand}</td>
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
                        <td>${object.dish.parLevels.threeThousand}</td>
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
                        <td>${object.dish.parLevels.threeThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        }
        break;
      case "4k":
        // Wok
        // check if table is empty
        if (document.querySelector("#wokTable").innerHTML === "") {
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.fourThousand}</td>
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
                      <td>${object.dish.parLevels.fourThousand}</td>
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
                        <td>${object.dish.parLevels.fourThousand}</td>
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
                        <td>${object.dish.parLevels.fourThousand}</td>
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
                        <td>${object.dish.parLevels.fourThousand}</td>
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
                        <td>${object.dish.parLevels.fourThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        }
        break;
      case "5k":
        // Wok
        // check if table is empty
        if (document.querySelector("#wokTable").innerHTML === "") {
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.fiveThousand}</td>
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
                      <td>${object.dish.parLevels.fiveThousand}</td>
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
                        <td>${object.dish.parLevels.fiveThousand}</td>
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
                        <td>${object.dish.parLevels.fiveThousand}</td>
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
                        <td>${object.dish.parLevels.fiveThousand}</td>
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
                        <td>${object.dish.parLevels.fiveThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        }
        break;
      case "6k":
        // Wok
        // check if table is empty
        if (document.querySelector("#wokTable").innerHTML === "") {
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.sixThousand}</td>
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
                      <td>${object.dish.parLevels.sixThousand}</td>
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
                        <td>${object.dish.parLevels.sixThousand}</td>
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
                        <td>${object.dish.parLevels.sixThousand}</td>
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
                        <td>${object.dish.parLevels.sixThousand}</td>
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
                        <td>${object.dish.parLevels.sixThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        }
        break;
      case "7k":
        // Wok
        // check if table is empty
        if (document.querySelector("#wokTable").innerHTML === "") {
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.sevenThousand}</td>
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
                      <td>${object.dish.parLevels.sevenThousand}</td>
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
                        <td>${object.dish.parLevels.sevenThousand}</td>
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
                        <td>${object.dish.parLevels.sevenThousand}</td>
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
                        <td>${object.dish.parLevels.sevenThousand}</td>
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
                        <td>${object.dish.parLevels.sevenThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        }
        break;
      case "8k":
        // Wok
        // check if table is empty
        if (document.querySelector("#wokTable").innerHTML === "") {
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.eightThousand}</td>
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
                      <td>${object.dish.parLevels.eightThousand}</td>
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
                        <td>${object.dish.parLevels.eightThousand}</td>
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
                        <td>${object.dish.parLevels.eightThousand}</td>
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
                        <td>${object.dish.parLevels.eightThousand}</td>
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
                        <td>${object.dish.parLevels.eightThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        }
        break;
      case "9k":
        // Wok
        // check if table is empty
        if (document.querySelector("#wokTable").innerHTML === "") {
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.nineThousand}</td>
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
                      <td>${object.dish.parLevels.nineThousand}</td>
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
                        <td>${object.dish.parLevels.nineThousand}</td>
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
                        <td>${object.dish.parLevels.nineThousand}</td>
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
                        <td>${object.dish.parLevels.nineThousand}</td>
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
                        <td>${object.dish.parLevels.nineThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        }
        break;
      case "10k":
        // Wok
        // check if table is empty
        if (document.querySelector("#wokTable").innerHTML === "") {
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.tenThousand}</td>
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
                      <td>${object.dish.parLevels.tenThousand}</td>
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
                        <td>${object.dish.parLevels.tenThousand}</td>
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
                        <td>${object.dish.parLevels.tenThousand}</td>
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
                        <td>${object.dish.parLevels.tenThousand}</td>
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
                        <td>${object.dish.parLevels.tenThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        }
        break;
      case "11k":
        // Wok
        // check if table is empty
        if (document.querySelector("#wokTable").innerHTML === "") {
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.elevenThousand}</td>
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
                      <td>${object.dish.parLevels.elevenThousand}</td>
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
                        <td>${object.dish.parLevels.elevenThousand}</td>
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
                        <td>${object.dish.parLevels.elevenThousand}</td>
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
                        <td>${object.dish.parLevels.elevenThousand}</td>
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
                        <td>${object.dish.parLevels.elevenThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        }
        break;
      case "12k":
        // Wok
        // check if table is empty
        if (document.querySelector("#wokTable").innerHTML === "") {
          wokStation.forEach((object) => {
            const wokTable = document.createElement("tr");
            wokTable.innerHTML = `
                  
                      <th scope="row">${wokCounter}</th>
                      <td>${object.dish.name}</td>
                      <td>${object.dish.parLevels.twelveThousand}</td>
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
                      <td>${object.dish.parLevels.twelveThousand}</td>
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
                        <td>${object.dish.parLevels.twelveThousand}</td>
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
                        <td>${object.dish.parLevels.twelveThousand}</td>
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
                        <td>${object.dish.parLevels.twelveThousand}</td>
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
                        <td>${object.dish.parLevels.twelveThousand}</td>
             `;
            document.querySelector("#fryTable").appendChild(fryTable);
            fryCounter += 1;
          });
        }
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
// print option for later

// document.querySelector("#btn-print").addEventListener("click", () => {
//   document.querySelector('#printer-version').print();
// });
printPrepLevels();
