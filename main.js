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
var fighters = [rockImage, paperImage, scissorsImage, alienImage, lizardImage, rockImageDifficult, paperImageDifficult, scissorsImageDifficult];

// EVENT LISTENERS
window.addEventListener("load", function() {
  human.retrieveWinsFromStorage();
  computer.retrieveWinsFromStorage();
  displayWins();
})
classicGameButton.addEventListener("click", classicView)
difficultGameButton.addEventListener("click", difficultView)
changeGame.addEventListener("click", changeGameOption)
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
  classicFighters.classList.remove("hidden")
  difficultFighters.classList.add("hidden")
  // setTimeout(function() {
    showClassicOptions()
  // }, 2000);
}

function difficultView() {
  gameView();
  game = new Game("difficult version", human, computer)
  difficultFighters.classList.remove("hidden")
  classicFighters.classList.add("hidden")
  // setTimeout(function() {
    showDifficultOptions()
  // }, 2000);
}

function gameView() {
  hide(difficultGameButton);
  hide(classicGameButton);
  gameHeading.innerText = "Choose your fighter!"
}

function showSelectedFighters() {
  var humanToken = game.human.token;
  var computerToken = game.computer.token;
  for (var i = 0; i < fighters.length; i++) {
    if (humanToken === fighters[i].dataset.name) {
      humanTokenImage.src = `${fighters[i].src}`
    }
    if (computerToken === fighters[i].dataset.name) {
      computerTokenImage.src = `${fighters[i].src}`
    }
  }
  selectedTokens.classList.remove("hidden")
}

function hideOptions() {
  for (var i = 0; i < fighters.length; i++) {
    console.log(fighters[i])
    fighters[i].classList.add("hidden")
  }
}

function showDifficultOptions() {
  for (var i = 0; i < fighters.length; i++) {
    fighters[i].classList.remove("hidden")
  }
}

function showClassicOptions(){
  for (var i = 0; i < 4; i++) {
    fighters[i].classList.remove("hidden")
  }
}

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
  hideOptions();
    showSelectedFighters()
  game.detectClassicWin();
  displayWins();
  setTimeout(function() {
  game.resetGame()
  }, 1000);
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
  hideOptions();
    showSelectedFighters()
  setTimeout(function() {
    game.resetGame()
  }, 1000);
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

function changeGameOption() {
  hide(difficultGameButton);
  hide(classicGameButton);
  hideOptions();
  hide(changeGameButton)
  gameHeading.innerText = "Choose your game!"
}

function hide(element) {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden")
  } else {
    element.classList.add("hidden")
  }
}

//Need to do still:
//add the emojis on the token option- put a hover on the buttons 
//get it to not say null on the scoreboard
//gifs for README


//CSS:
//left and right section to go all the way down
//REFACTOR OPPORTUNITIES
//change function names to verbs **
