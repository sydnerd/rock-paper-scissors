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
    localStorage.setItem(`${this.name}Wins`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    this.wins = JSON.parse(llocalStorage.setItem(`${this.name}Wins`, JSON.stringify(this.wins)))
  }

  takeTurn(token) {
    this.token = token;
  }
}
