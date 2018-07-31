"use strict";

console.log("xhr main.js");

let startTime = Date.now();
console.log("startTime", startTime);

for (let i = 0; i < 2000000; i++) {
   let x = i + i / 2 * 6;
};

console.log("newTime", Date.now() - startTime);

//step one
let bigDataRequest = new XMLHttpRequest();
// console.log("bigdataResg", bigDataRequest);

bigDataRequest.addEventListener("load", bigDataComplete);
bigDataRequest.addEventListener("error", bigDataFailed);

function bigDataComplete(event) {
   console.log("event", event);
   if (event.target.status === 200) {
      let bigData = JSON.parse(event.target.responseText);
      console.log("Time of Big Data", Date.now() - startTime);
      console.log("data", bigData);
   } else {
      console.log("check the spelling of your file");
   }
}

function bigDataFailed(event) {
   console.log("oops something went wrong");
}

bigDataRequest.open("GET", "JEOPARDY_QUESTIONS1.json");
bigDataRequest.send();

//// colors code
function showData(taco) {
   let colorDiv = document.getElementById("all-my-colors");
   let colorData = '';
   // let item;
   for (let item in taco) {
      let colorItem = taco[item];
      colorData += `<div><h2>${colorItem.color}: ${colorItem.value}</h2></div>`
   };

   colorDiv.innerHTML = colorData;
   console.log("the colors are done", Date.now() - startTime);
}

let littleDataRequest = new XMLHttpRequest();
littleDataRequest.addEventListener("load", littleDataRequestComplete);
// littleDataRequest.addEventListener("error", littleDataRequestFailed);


function littleDataRequestComplete(event){
   console.log("colors have loaded");
   let colorData = JSON.parse(event.target.responseText);
   console.log("colorData", colorData);
   showData(colorData);
}

littleDataRequest.open("GET", "color.json");
littleDataRequest.send();













