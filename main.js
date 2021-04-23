// VARIABLES FOR HTML ELEMENTS
var classicGameButton = document.getElementById("classicGameButton");
var difficultGameButton = document.getElementById("difficultGameButton");
var classicFighters = document.getElementById("classicFighters");
var difficultFighters = document.getElementById("difficultFighters")
var gameHeading = document.getElementById("gameHeading");
var rockImage = document.getElementById("rockImage");
var rockIcon = document.getElementById("rockIcon");

// EVENT LISTENERS
classicGameButton.addEventListener("click", classicView)
difficultGameButton.addEventListener("click", difficultView)
classicFighters.addEventListener("click", selectFighter)




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

function selectFighter(){
  if(event.target.id === "rockImage"){
    hide(rockIcon, true)
  }
  if(event.target.id === "paperImage"){
    hide(rockIcon, true)
  }
  if(event.target.id === "scissorsImage"){
    hide(rockIcon, true)
  }
}

function hide(element, hidden) {
   if (hidden) {
     element.classList.remove('hidden');
   } else {
     element.classList.add('hidden');
   }
 }
