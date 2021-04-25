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
var alienIcon = document.getElementById("alienIcon");
var humanWins = document.getElementById("humanWins");
var computerWins = document.getElementById("computerWins")
var game = "";

// EVENT LISTENERS
// window.addEventListener("load", startNewGame)
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
function startGame() {
  game = new Game(gameType)
  game.detectWin()
}

function classicView() {
  gameView();
  game = new Game("classic version")
  hide(classicFighters, true);
}

function difficultView() {
  gameView();
  game = new Game("difficult version")
  hide(difficultFighters, true);
}

function gameView() {
  hide(difficultGameButton, false);
  hide(classicGameButton, false);
  gameHeading.innerText = "Choose your fighter!"
}

//when there is a draw in the classic game, only one image shows
//how do I fix the formatting of the fighters?
// how do I make sure the icon only shows for a second
//need to store the wins and retrieve them

function showFighters() {
  var humanToken = game.human.token;
  var computerToken = game.computer.token;
  var fighters = [rockImage, paperImage, scissorsImage, alienImage, lizardImage, rockImageDifficult, paperImageDifficult, scissorsImageDifficult];
  for (var i = 0; i < fighters.length; i++) {
    if (humanToken === fighters[i].dataset.name) {
      hide(fighters[i], true)
    }
    if (computerToken === fighters[i].dataset.name) {
      hide(fighters[i], true)
    }
  }
}

function hideFighters() {
  hide(paperImage, false)
  hide(scissorsImage, false)
  hide(rockImage, false)
  hide(rockImageDifficult, false)
  hide(paperImageDifficult, false)
  hide(scissorsImageDifficult, false)
  hide(alienImage, false)
  hide(lizardImage, false)
}

function classicGame(choice) {
  game.computer.token = classicComputerChoice();
  if (event.target.id === "rockImage") {
    hide(rockIcon, true)
    game.human.token = "r"
  }
  if (event.target.id === "paperImage") {
    hide(paperIcon, true)
    game.human.token = "p"
  }
  if (event.target.id === "scissorsImage") {
    hide(scissorsIcon, true)
    game.human.token = "s"
  }
  hideFighters();
  showFighters();
  game.detectClassicWin();
  displayWins();
}

function classicComputerChoice() {
  var classicChoices = ["r", "p", "s"];
  var randomChoiceClassic = Math.floor(Math.random() * 3);
  return classicChoices[randomChoiceClassic];
}

function difficultGame(choice) {
  game.computer.token = difficultComputerChoice();
  if (event.target.id === "rockImageDifficult") {
    hide(rockIconDifficult, true)
    game.human.token = "r"
  }
  if (event.target.id === "paperImageDifficult") {
    hide(paperIconDifficult, true)
    game.human.token = "p"
  }
  if (event.target.id === "scissorsImageDifficult") {
    hide(scissorsIconDifficult, true)
    game.human.token = "s"
  }
  if (event.target.id === "alienImage") {
    hide(alienIcon, true)
    game.human.token = "a"
  }
  if (event.target.id === "lizardImage") {
    hide(lizardIcon, true)
    game.human.token = "l"
  }
  hideFighters();
  showFighters();
  game.detectDifficultWin();
  displayWins();
}

function difficultComputerChoice() {
  var difficultChoices = ["r", "p", "s", "a", "l"]
  var randomChoiceDifficult = Math.floor(Math.random() * 5);
  return difficultChoices[randomChoiceDifficult];
}

function displayWins(){
  if(game.human.wins){
    humanWins.innerText = `Wins: ${game.human.wins}`
  }
  if(game.computer.wins){
    computerWins.innerText = `Wins: ${game.computer.wins}`
  }
}

function hide(element, hidden) {
  if (hidden) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}
