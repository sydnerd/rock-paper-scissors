// VARIABLES FOR HTML ELEMENTS
var alienImage = document.getElementById("alienImage");
var alienIcon = document.getElementById("alienIcon");
var changeGame = document.getElementById("changeGameButton");
var classicFighters = document.getElementById("classicFighters");
var classicGameButton = document.getElementById("classicGameButton");
var computerTokenImage = document.getElementById("computerTokenImage");
var computerWins = document.getElementById("computerWins");
var difficultFighters = document.getElementById("difficultFighters");
var difficultGameButton = document.getElementById("difficultGameButton");
var gameHeading = document.getElementById("gameHeading");
var humanTokenImage = document.getElementById("humanTokenImage");
var humanWins = document.getElementById("humanWins");
var images = document.querySelector("image");
var lizardIcon = document.getElementById("lizardIcon");
var lizardImage = document.getElementById("lizardImage");
var paperIcon = document.getElementById("paperIcon");
var rockIcon = document.getElementById("rockIcon");
var rockImage = document.getElementById("rockImage");
var rockImageDifficult = document.getElementById("rockImageDifficult")
var paperImage = document.getElementById("paperImage");
var paperImageDifficult = document.getElementById("paperImageDifficult")
var scissorsIcon = document.getElementById("scissorsIcon");
var scissorsImage = document.getElementById("scissorsImage");
var scissorsImageDifficult = document.getElementById("scissorsImageDifficult");
var selectedTokens = document.getElementById("selectedTokens");

//GLOBAL VARIABLES
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
changeGame.addEventListener("click", changeGame)
rockImage.addEventListener("click", function() {
  startClassicGame("r");
})
paperImage.addEventListener("click", function() {
  startClassicGame("p");
})
scissorsImage.addEventListener("click", function() {
  startClassicGame("s");
})
alienImage.addEventListener("click", function() {
  startDifficultGame("a");
})
lizardImage.addEventListener("click", function() {
  startDifficultGame("l");
})
rockImageDifficult.addEventListener("click", function() {
  startDifficultGame("r");
})
paperImageDifficult.addEventListener("click", function() {
  startDifficultGame("p");
})
scissorsImageDifficult.addEventListener("click", function() {
  startDifficultGame("s");
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

//use event delegation and hide the container
function show() {
  hide(paperImage, true)
  hide(scissorsImage, true)
  hide(rockImage, true)
  hide(rockImageDifficult, true)
  hide(paperImageDifficult, true)
  hide(scissorsImageDifficult, true)
  hide(alienImage, true)
  hide(lizardImage, true)
}

// function displayIcon() {
//   images.innerHTML += `<span class="icon">&#x1F920;</span>`
// }

function startClassicGame(choice) {
  game.computer.token = findClassicComputerChoice();
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

function findClassicComputerChoice() {
  var classicChoices = ["r", "p", "s"];
  var randomChoiceClassic = Math.floor(Math.random() * 3);
  return classicChoices[randomChoiceClassic];
}

function startDifficultGame(choice) {
  game.computer.token = findDifficultComputerChoice();
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

function findDifficultComputerChoice() {
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

function changeGame() {
  hide(difficultGameButton, true);
  hide(classicGameButton, true);
  hideFighters();
  hide(changeGameButton, false)
  gameHeading.innerText = "Choose your game!"
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
//change function names to verbs **
