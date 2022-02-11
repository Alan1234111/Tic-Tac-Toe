export class Player {
  constructor() {
    this.XO = true;
  }

  xStart() {
    this.XO = true;
  }

  oStart() {
    this.XO = false;
  }

  which(turn) {
    this.XO = !this.XO;

    if (this.XO) {
      turn.textContent = "X";
      return "O";
    } else {
      turn.textContent = "O";
      return "X";
    }
  }
}
