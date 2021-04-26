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
var changeGame = document.getElementById("changeGameButton");
var humanTokenImage = document.getElementById("humanTokenImage");
var computerTokenImage = document.getElementById("computerTokenImage");
var selectedTokens = document.getElementById("selectedTokens");
var game = "";
var human = new Player("human");
var computer = new Player("computer")

// EVENT LISTENERS
window.addEventListener("load", function() {
  human.retrieveWinsFromStorage();
  computer.retrieveWinsFromStorage();
  displayWins();
})
classicGameButton.addEventListener("click", classicView)
difficultGameButton.addEventListener("click", difficultView)
changeGame.addEventListener("click", change)
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
function classicView() {
  gameView();
  game = new Game("classic version", human, computer)
  hide(classicFighters, true);
  show();
}

function difficultView() {
  gameView();
  game = new Game("difficult version", human, computer)
  hide(difficultFighters, true);
}

function gameView() {
  hide(difficultGameButton, false);
  hide(classicGameButton, false);
  gameHeading.innerText = "Choose your fighter!"
}

function showFighters() {
  var humanToken = game.human.token;
  var computerToken = game.computer.token;
  var fighters = [rockImage, paperImage, scissorsImage, alienImage, lizardImage, rockImageDifficult, paperImageDifficult, scissorsImageDifficult];
  for (var i = 0; i < fighters.length; i++) {
    if (humanToken === fighters[i].dataset.name) {
      humanTokenImage.src = `${fighters[i].src}`
    }
    if (computerToken === fighters[i].dataset.name) {
      computerTokenImage.src = `${fighters[i].src}`
    }
  }
  hide(selectedTokens, true)
}

//use event delegation and hide the container
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

function show(){
  hide(paperImage, true)
  hide(scissorsImage,true)
  hide(rockImage, true)
  hide(rockImageDifficult, true)
  hide(paperImageDifficult, true)
  hide(scissorsImageDifficult, true)
  hide(alienImage, true)
  hide(lizardImage, true)
}

function classicGame(choice) {
  game.computer.token = classicComputerChoice();
  if (event.target.id === "rockImage") {
    game.human.token = "r"
  }
  if (event.target.id === "paperImage") {
    game.human.token = "p"
  }
  if (event.target.id === "scissorsImage") {
    game.human.token = "s"
  }
  hideFighters();
  setTimeout(function() {
    showFighters()
  }, 1000);
  game.detectClassicWin();
  displayWins();
  setTimeout(function() {
    game.resetGame()
  }, 2000);
}

function classicComputerChoice() {
  var classicChoices = ["r", "p", "s"];
  var randomChoiceClassic = Math.floor(Math.random() * 3);
  return classicChoices[randomChoiceClassic];
}

function difficultGame(choice) {
  game.computer.token = difficultComputerChoice();
  if (event.target.id === "rockImageDifficult") {
    game.human.token = "r"
  }
  if (event.target.id === "paperImageDifficult") {
    game.human.token = "p"
  }
  if (event.target.id === "scissorsImageDifficult") {
    game.human.token = "s"
  }
  if (event.target.id === "alienImage") {
    game.human.token = "a"
  }
  if (event.target.id === "lizardImage") {
    game.human.token = "l"
  }
  hideFighters();
  setTimeout(function() {
    showFighters()
  }, 1000);
  setTimeout(function() {
    game.resetGame()
  }, 2000);
  game.detectDifficultWin();
  displayWins();
}

function difficultComputerChoice() {
  var difficultChoices = ["r", "p", "s", "a", "l"]
  var randomChoiceDifficult = Math.floor(Math.random() * 5);
  return difficultChoices[randomChoiceDifficult];
}


function getWins() {
  game.human.retrieveWinsFromStorage();
  game.computer.retrieveWinsFromStorage();
}

function displayWins() {
  humanWins.innerText = `Wins: ${human.wins}`
  computerWins.innerText = `Wins: ${computer.wins}`
}

function change (){
  hide(difficultGameButton, true);
  hide(classicGameButton, true);
  hideFighters();
}

function hide(element, hidden) {
  if (hidden) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}
//Need to do still:
//add the emojis on the token option
//add the change game button that resets the game
//reset method in game class
//wins is null when you clear the storage
//time out after each game
//game, way to keep track of whose turn it is
//README
//push information into game.board

//REFACTOR OPPORTUNITIES
//CSS:
//the header, pink should but in the middle
//
