class Game {
  constructor(gameType) {
    this.human = new Player("human")
    this.computer = new Player("computer");
    this.gameType = gameType;
    this.isCompleted = false;
    this.turn = undefined;
    this.winner;
    this.board = "";
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

detectDifficultWin(){
  if (this.human.token === this.computer.token) {
    gameHeading.innerText = "It's a draw!"
  }
  if(this.human.token === "r" && this.computer.token === "s" || this.human.token === "p" && this.computer.token === "r" || this.human.token === "s" && this.computer.token === "p" || this.human.token === "r" && this.computer.token === "l" || this.human.token === "p" && this.computer.token === "a" || this.human.token === "s" && this.computer.token === "l" || this.human.token === "l" && this.computer.token === "p" || this.human.token === "l" && this.computer.token === "a" || this.human.token === "a" && this.computer.token === "s"|| this.human.token === "a" && this.computer.token === "s"){
    this.human.addWin()
    gameHeading.innerText = "Human won this round!"
  }
  if(this.human.token === "r" && this.computer.token === "p" || this.human.token === "p" && this.computer.token === "s" || this.human.token === "s" && this.computer.token === "r" || this.human.token === "r" && this.computer.token === "a" || this.human.token === "p" && this.computer.token === "l" || this.human.token === "s" && this.computer.token === "a" || this.human.token === "l" && this.computer.token === "r" || this.human.token === "l" && this.computer.token === "s" || this.human.token === "a" && this.computer.token === "p"|| this.human.token === "a" && this.computer.token === "l"){
    this.computer.addWin()
    gameHeading.innerText = "Computer won this round!"
  }
}


  //
  // resetBoard() {
  //   setTimeout(this.human)
  // }



  changePlayer() {
    if (this.turn === this.player1) {
      this.turn = this.player2
    } else {
      this.turn = this.player1
    }
  }
}
