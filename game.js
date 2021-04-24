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
    if (this.human.token === "r" && this.computer.token === "s") {
      this.human.addWin()
      gameHeading.innerText = "Human won this round!"
    }
    if (this.human.token === "r" && this.computer.token === "p") {
      this.computer.addWin();
      gameHeading.innerText = "Computer won this round!"
    }
    if (this.human.token === "p" && this.computer.token === "r") {
      this.human.addWin()
      gameHeading.innerText = "Human won this round!"
    }
    if (this.human.token === "p" && this.computer.token === "s") {
      this.computer.addWin();
      gameHeading.innerText = "Computer won this round!"
    }
    if (this.human.token === "s" && this.computer.token === "p"|| "l"){
      this.human.addWin()
      gameHeading.innerText = "Human won this round!"
    }
    if(this.human.token === "s" && this.computer.token === "r"){
      this.computer.addWin();
      gameHeading.innerText = "Computer won this round!"
    }
    if (this.human.token === "l" && this.computer.token === "p"|| "a"){
      this.human.addWin()
      gameHeading.innerText = "Human won this round!"
    }
    if(this.human.token === "l" && this.computer.token === "s" || "r"){
      this.computer.addWin();
      gameHeading.innerText = "Computer won this round!"
    }
    if (this.human.token === "a" && this.computer.token === "s"|| "r"){
      this.human.addWin()
      gameHeading.innerText = "Human won this round!"
    }
    if(this.human.token === "a" && this.computer.token === "l" || "p"){
      this.computer.addWin();
      gameHeading.innerText = "Computer won this round!"
    }

    //classic game type
    //if user === r, computer === p, computer won
    //if user === r, computer === s or L, user won
    //if user === p, computer === r or A, user won
    // if user === p, computer === s, computer won
    //if user === s,computer ==== r, computer won
    //if user === s, computer === p or L, user won
    //if user === L, computer ==== p or A, user won
    //else computer won
    //if user === A , computer=== s or R, user won
    //else computer won

  }

  resetBoard() {

  }



  changePlayer() {
    if (this.turn === this.player1) {
      this.turn = this.player2
    } else {
      this.turn = this.player1
    }
  }
}
