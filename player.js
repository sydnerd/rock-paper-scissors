class Player {
  constructor(playerName) {
    this.name = playerName;
    this.token;
    this.wins = 0;
  }

  addWin() {
    this.wins++;
    this.saveWinsToStorage();
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.name}Wins`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    this.wins = JSON.parse(localStorage.getItem(`${this.name}Wins`));
  }

  takeTurn(token) {
    this.token = token;
  }
}
