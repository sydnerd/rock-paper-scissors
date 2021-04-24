// VARIABLES FOR HTML ELEMENTS
var classicGameButton = document.getElementById("classicGameButton");
var difficultGameButton = document.getElementById("difficultGameButton");
var classicFighters = document.getElementById("classicFighters");
var difficultFighters = document.getElementById("difficultFighters")
var gameHeading = document.getElementById("gameHeading");
var rockImage = document.getElementById("rockImage");
var rockIcon = document.getElementById("rockIcon");
var rockImageDifficult = document.getElementById("rockImageDifficult")
var paperImage = document.getElementById("paperImage");
var paperIcon = document.getElementById("paperIcon");
var paperImageDifficult = document.getElementById("paperImageDifficult")
var scissorsImage = document.getElementById("scissorsImage");
var scissorsIcon = document.getElementById("scissorsIcon");
var scissorsImageDifficult = document.getElementById("scissorsImageDifficult")
var lizardImage = document.getElementById("lizardImage");
var lizardIcon = document.getElementById("lizardIcon");
var alienImage = document.getElementById("alienImage");
var alienIcon = document.getElementById("alienIcon")
var game;

// EVENT LISTENERS
classicGameButton.addEventListener("click", classicView)
difficultGameButton.addEventListener("click", difficultView)
rockImage.addEventListener("click", function() {
  classicGame("r");
})
paperImage.addEventListener("click", function() {
  classicGame("p");
})
scissorsImage.addEventListener("click", function() {
  classicGame("s");
})
alienImage.addEventListener("click", function() {
  difficultGame("a");
})
lizardImage.addEventListener("click", function() {
  difficultGame("l");
})
rockImageDifficult.addEventListener("click", function() {
  difficultGame("r");
})
paperImageDifficult.addEventListener("click", function() {
  difficultGame("p");
})
scissorsImageDifficult.addEventListener("click", function() {
  difficultGame("s");
})


// EVENT HANDLERS AND GLOBAL FUNCTIONS
// function gameChoice() {
//   if(event.target.id === "classicGameButton"){
//     classicView();
//     classicGame();
//   }else{
//     difficultView();
//     difficultGame();
//   }
//   // var game = new Game
// }

function startGame(player) {
  game = new Game (gameType)

}

function classicView() {
  gameView();
  hide(classicFighters, true);
}

function difficultView() {
  gameView();
  hide(difficultFighters, true);
}

function gameView() {
  hide(difficultGameButton, false);
  hide(classicGameButton, false);
  gameHeading.innerText = "Choose your fighter!"
}

function classicGame(choice) {
  var computerClassic = classicComputerChoice();
  if (event.target.id === "rockImage") {
    hide(rockIcon, true)
    hide(scissorsImage, false)
    hide(paperImage, false)
  }
  if (event.target.id === "paperImage") {
    hide(paperIcon, true)
    hide(scissorsImage, false)
    hide(rockImage, false)
  }
  if (event.target.id === "scissorsImage") {
    hide(scissorsIcon, true)
    hide(paperImage, false)
    hide(rockImage, false)
  }
  console.log("user", choice)
  console.log("compu", computerClassic)
}

function classicComputerChoice() {
  var classicChoices = ["r", "p", "s"];
  var randomChoiceClassic = Math.floor(Math.random() * 3);
  return classicChoices[randomChoiceClassic];
}

function difficultGame(choice) {
  var computerDifficult = difficultComputerChoice();
  if (event.target.id === "rockImageDifficult") {
    hide(rockIcon, true)
    hide(scissorsImageDifficult, false)
    hide(paperImageDifficult, false)
    hide(alienImage, false)
    hide(lizardImage, false)
  }
  if (event.target.id === "paperImageDifficult") {
    hide(paperIcon, true)
    hide(scissorsImageDifficult, false)
    hide(rockImageDifficult, false)
    hide(alienImage, false)
    hide(lizardImage, false)
  }
  if (event.target.id === "scissorsImageDifficult") {
    hide(scissorsIcon, true)
    hide(paperImageDifficult, false)
    hide(rockImageDifficult, false)
    hide(alienImage, false)
    hide(lizardImage, false)
  }
  if (event.target.id === "alienImage") {
    hide(alienIcon, true)
    hide(scissorsImageDifficult, false)
    hide(paperImageDifficult, false)
    hide(rockImageDifficult, false)
    hide(lizardImage, false)
  }
  if (event.target.id === "lizardImage") {
    hide(lizardIcon, true)
    hide(scissorsImageDifficult, false)
    hide(paperImageDifficult, true)
    hide(rockImageDifficult, true)
    hide(alienImage, false)
  }
  console.log("user", choice)
  console.log("compu", computerDifficult)
}

function difficultComputerChoice() {
  var difficultChoices = ["r", "p", "s", "a", "l"]
  var randomChoiceDifficult = Math.floor(Math.random() * 5);
  return difficultChoices[randomChoiceDifficult];
}

function hide(element, hidden) {
  if (hidden) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}
