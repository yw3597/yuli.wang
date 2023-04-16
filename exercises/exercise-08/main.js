/* 
Instructions: when a user clicks on one of the colored dots, the    background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 
Hint: Classes for each color have already been defined in the CSS tab.
*/

// 1 -- Select each button

let yellowBtn = document.getElementById("yellowButton");
let blueBtn = document.getElementById("blueButton");
let redBtn = document.getElementById("redButton");
let greenwBtn = document.getElementById("greenButton");

// 2 -- Write an event handler to change the color of the page when each circle is pressed.

function switchToYellow() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#e0c865";
  body.style.color = "#ffffff";
}

function switchToBlue() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#677be0";
    body.style.color = "#ffffff";
  }

function switchToRed() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#db4343";
  body.style.color = "#ffffff";
}

function switchToGreen() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#35bb8a";
  body.style.color = "#35bb8a";
}

// 3 -- Add an event listener to each circle
yellowBtn.addEventListener("click", switchToYellow);
blueBtn.addEventListener("click", switchToBlue);
redBtn.addEventListener("click", switchToRed);
greenBtn.addEventListener("click", switchToGreen);