class Player {
  constructor(name){
    this.name = name;
    this.choice;
    this.wins = 0;
  }

  saveWinsToStorage(){

  }

  retrieveWinsFromStorage(){

  }

  takeTurn(choice){
    this.choice = choice;
  }
}
