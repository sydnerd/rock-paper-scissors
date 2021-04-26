class Game {
  constructor(gameType, human, computer) {
    this.human = human;
    this.computer = computer;
    this.gameType = gameType;
    this.board = "";
    //need to update this.board somewhere
  }
  detectClassicWin() {
    if (this.human.token === this.computer.token) {
      gameHeading.innerText = "It's a draw!"
    }
    if (this.human.token === "r" && this.computer.token === "s" || this.human.token === "p" && this.computer.token === "r" || this.human.token === "s" && this.computer.token === "p") {
      this.human.addWin()
      gameHeading.innerText = "Human won this round!"
    }
    if (this.human.token === "r" && this.computer.token === "p" || this.human.token === "p" && this.computer.token === "s" || this.human.token === "s" && this.computer.token === "r") {
      this.computer.addWin()
      gameHeading.innerText = "Computer won this round!"
    }
  }

  detectDifficultWin() {
    if (this.human.token === this.computer.token) {
      gameHeading.innerText = "It's a draw!"
    }
    if (this.human.token === "r" && this.computer.token === "s" || this.human.token === "p" && this.computer.token === "r" || this.human.token === "s" && this.computer.token === "p" || this.human.token === "r" && this.computer.token === "l" || this.human.token === "p" && this.computer.token === "a" || this.human.token === "s" && this.computer.token === "l" || this.human.token === "l" && this.computer.token === "p" || this.human.token === "l" && this.computer.token === "a" || this.human.token === "a" && this.computer.token === "s" || this.human.token === "a" && this.computer.token === "r") {
      this.human.addWin()
      gameHeading.innerText = "Human won this round!"
    }
    if (this.human.token === "r" && this.computer.token === "p" || this.human.token === "p" && this.computer.token === "s" || this.human.token === "s" && this.computer.token === "r" || this.human.token === "r" && this.computer.token === "a" || this.human.token === "p" && this.computer.token === "l" || this.human.token === "s" && this.computer.token === "a" || this.human.token === "l" && this.computer.token === "r" || this.human.token === "l" && this.computer.token === "s" || this.human.token === "a" && this.computer.token === "p" || this.human.token === "a" && this.computer.token === "l") {
      this.computer.addWin()
      gameHeading.innerText = "Computer won this round!"
    }
  }

  retrieveWinsFromStorage() {
    this.human.retrieveWinsFromStorage();
    this.computer.retrieveWinsFromStorage();
  }

  //its not working properly, also need to reset the game properties
  resetGame() {
    selectedTokens.classList.add("hidden")
    // humanTokenImage.classList.add("hidden")
    // computerTokenImage.classList.add("hidden")
    changeGameButton.classList.remove("hidden")
    gameHeading.innerText = "Choose your fighter!"
    if(this.gameType === "difficult version"){
      showDifficultOptions()
      difficultFighters.classList.remove("hidden")
    }else {
      showClassicOptions()
      classicFighters.classlist.remove("hidden")
    }
  }
}
