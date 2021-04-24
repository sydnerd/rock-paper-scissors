class Game {
  constructor(gameType) {
    this.human = new Player("human")
    this.computer = new Player("computer");
    this.gameType = gameType;
    this.isCompleted = false;
    this.turn = player1;
    this.winner;
    this.board = "";
  }

  detectWin() {
    if(this.human.token === "r" && this.computer.token === "s" || "l"){
      this.human.addWin()
      gameHeading.innerText = "Human won this round!"
    }else{
      this.computer.addWins();
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
    this.winner = null;

  }

  detectDraw() {
    if(this.human.token === this.computer.token){
      gameHeading.innerText = "It's a draw!"
    }
  }

  changePlayer() {
    if (this.turn === this.player1) {
      this.turn = this.player2
    } else {
      this.turn = this.player1
    }
  }
}
