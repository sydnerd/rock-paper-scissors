// VARIABLES FOR HTML ELEMENTS
var classicGameButton = document.getElementById("classicGameButton");
var difficultGameButton = document.getElementById("difficultGameButton");
var classicFighters = document.getElementById("classicFighters");
var difficultFighters = document.getElementById("difficultFighters")
var gameHeading = document.getElementById("gameHeading");
var rockImage = document.getElementById("rockImage");
var rockIcon = document.getElementById("rockIcon");
var paperImage = document.getElementById("paperImage");
var paperIcon = document.getElementById("paperIcon");
var scissorsImage = document.getElementById("scissorsImage");
var scissorsIcon= document.getElementById("scissorsIcon");
var lizardImage = document.getElementById("lizardImage");
var lizardIcon = document.getElementById("lizardIcon");
var alienImage = document.getElementById("alienImage");
var alienIcon = document.getElementById("alienIcon")

// EVENT LISTENERS
classicGameButton.addEventListener("click", classicView)
difficultGameButton.addEventListener("click", difficultView)
classicFighters.addEventListener("click", addClassicIcon)
difficultFighters.addEventListener("click", addDifficultIcon)




 // EVENT HANDLERS AND GLOBAL FUNCTIONS
function classicView(){
  gameView();
  hide(classicFighters, true);
}

function difficultView(){
  gameView();
  hide(classicFighters, true);
  hide(difficultFighters,true);
}

function gameView(){
  hide(difficultGameButton, false);
  hide(classicGameButton, false);
  gameHeading.innerText= "Choose your fighter!"
}

function addClassicIcon(){
  event.preventDefault();
  if(event.target.id === "rockImage"){
    hide(rockIcon, true)
    paperIcon.classList.add("hidden")
    scissorsIcon.classList.add("hidden")
    lizardIcon.classList.add("hidden")
    alienIcon.classList.add("hidden")
  }
  if(event.target.id === "paperImage"){
    hide(paperIcon, true)
    rockIcon.classList.add("hidden")
    scissorsIcon.classList.add("hidden")
    lizardIcon.classList.add("hidden")
    alienIcon.classList.add("hidden")
  }
  if(event.target.id === "scissorsImage"){
    hide(scissorsIcon, true)
    rockIcon.classList.add("hidden")
    paperIcon.classList.add("hidden")
    lizardIcon.classList.add("hidden")
    alienIcon.classList.add("hidden")
  }
}

function addDifficultIcon(){
  event.preventDefault();
  if(event.target.id === "lizardImage"){
    hide(lizardIcon, true)
    rockIcon.classList.add("hidden")
    paperIcon.classList.add("hidden")
    scissorsIcon.classList.add("hidden")
    alienIcon.classList.add("hidden")
    console.log("hello")
  }
  if(event.target.id === "alienImage"){
    hide(alienIcon, true)
    rockIcon.classList.add("hidden")
    paperIcon.classList.add("hidden")
    scissorsIcon.classList.add("hidden")
    lizardIcon.classList.add("hidden")
  }
}

function hide(element, hidden) {
   if (hidden) {
     element.classList.remove('hidden');
   } else {
     element.classList.add('hidden');
   }
 }
