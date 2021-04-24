class Game {
  constructor(gameType) {
    this.player1 = new Player("player1")
    this.player2 = new Player("player2");
    this.gameType = gameType;
    this.isCompleted = false;
    this.turn = player1;
    this.winner;
    this.board = "";
  }

  detectWin() {
//
  }

  resetBoard() {
    //set timeout
  }

  detectDraw() {

  }

  changePlayer() {
    if (this.turn === this.player1) {
      this.turn = this.player2
    } else {
      this.turn = this.player1
    }
  }
}
