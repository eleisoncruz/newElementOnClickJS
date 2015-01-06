/**
  * newElementOnClick.js
  * This mini-web app will create a new element on a button click, with random colors, and in mousehover
  * with color name.
*/

// Creating elements of a new block
function theNewElement() {
  var newBlock = document.createElement("div");
  var colors = ["red", "green", "blue", "yellow", "violet", "gold", "cyan" , "teal"];
  var randomColors = Math.floor(Math.random() * colors.length);
  newBlock.setAttribute("class", "newBlock");
  newBlock.setAttribute("title", colors[randomColors]);
  newBlock.style.background = colors[randomColors];
  document.getElementById("stageArea").appendChild(newBlock);

}

// On every button clicks
function theButtonClicks() {
  theNewElement();
}

window.onload = function() {
  // Create button element
  var theButton = document.createElement("button");
  theButton.setAttribute("id", "addBlock");
  theButton.innerHTML = "+";
  theButton.setAttribute("onclick", "theButtonClicks()");
  document.getElementById("stageArea").appendChild(theButton);
}