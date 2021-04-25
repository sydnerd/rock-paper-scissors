class Player {
  constructor(playerName) {
    this.name = playerName;
    this.token;
    this.wins = 0;
  }

  addWin() {
    this.wins++;
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }

  takeTurn(token) {
    this.token = token;
  }
}
