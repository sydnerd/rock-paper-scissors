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
    localStorage.setItem("saveWins", JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {

  }

  takeTurn(token) {
    this.token = token;
  }
}
