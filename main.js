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
rockImage.addEventListener("click", function(){
  classicGame("rock");
})
paperImage.addEventListener("click", function(){
  classicGame("paper");
})
scissorsImage.addEventListener("click", function(){
  classicGame("scissors");
})
alienImage.addEventListener("click", function(){
  difficultGame("alien");
})
lizardImage.addEventListener("click", function(){
  difficultGame("lizard");
})



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
  }
  if(event.target.id === "alienImage"){
    hide(alienIcon, true)
    rockIcon.classList.add("hidden")
    paperIcon.classList.add("hidden")
    scissorsIcon.classList.add("hidden")
    lizardIcon.classList.add("hidden")
  }
}

function classicGame(choice){
  var computerClassic = classicComputerChoice();
  console.log("user", choice)
  console.log("compu", computerClassic)
}

function classicComputerChoice(){
  var classicChoices = ["rock", "paper", "scissors"];
  var randomChoiceClassic = Math.floor(Math.random() *3);
    return classicChoices[randomChoiceClassic];
  }

function difficultGame(choice){
  var computerDifficult = difficultComputerChoice();
  console.log("user", choice)
  console.log("compu", computerDifficult)
}

function difficultComputerChoice(){
  var difficultChoices = ["rock", "paper", "scissors", "alien", "lizard"]
  var randomChoiceDifficult = Math.floor(Math.random()*5);
  return difficultChoices[randomChoiceDifficult];
}

//if the user clicks classic game, then the computer choice is rock, paper, scissors and
//you do the random with only the 3 options
//if the user clicks difficult, then the computer choice at random includes lizard and
//alien
//if(classic button was checked){
// // var choices = ["rock", "paper", "scissors"]
// var randomChoice = Math.floor(Math.random() *3);
// return choices[randomChoice];
// // }else if { difficult was clicked, then include alien and lizard }

function hide(element, hidden) {
   if (hidden) {
     element.classList.remove('hidden');
   } else {
     element.classList.add('hidden');
   }
 }
