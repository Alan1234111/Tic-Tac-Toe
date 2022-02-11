import { Player } from "./Player.js";
import { Actual } from "./Actual.js";
import { Winner } from "./Winner.js";

class Game {
  constructor(
    board,
    tiles,
    winDiv,
    textWin,
    reset,
    choice,
    ai,
    human,
    form,
    firstP,
    secondP,
    playerOneName,
    playerOneScore,
    playerTwoName,
    playerTwoScore,
    transparent,
    turn
  ) {
    //board
    this.board = board;
    this.tiles = tiles;
    //Alert who wins
    this.winDiv = winDiv;
    this.textWin = textWin;
    //reset
    this.reset = reset;
    //Who Play
    this.choice = choice;
    this.ai = ai;
    this.human = human;
    //Names of players
    this.form = form;
    this.firstP = firstP;
    this.secondP = secondP;
    // player names and score
    this.playerOneName = playerOneName;
    this.playerOneScore = playerOneScore;
    this.playerTwoName = playerTwoName;
    this.playerTwoScore = playerTwoScore;

    this.transparent = transparent;

    this.turn = turn;

    this.player = new Player();
    this.actual = new Actual();
    this.win = new Winner();

    this.gameSummary = {
      X: 0,
      O: 0,
    };

    this.who = true;

    this.plays();
    this.tileContents();
    this.resets();
    this.formComplete();
  }

  plays() {
    this.human.addEventListener("click", () => {
      this.choice.classList.add("nonActive");
      this.form.classList.add("active");
    });
  }

  formComplete() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.playerOneName.textContent = `${this.firstP.value} X`;
      this.playerTwoName.textContent = `${this.secondP.value} O`;
      this.score();

      this.form.classList.remove("active");
    });
  }

  score() {
    this.playerOneScore.textContent = this.gameSummary.X;
    this.playerTwoScore.textContent = this.gameSummary.O;
  }

  resets() {
    this.reset.addEventListener("click", (e) => {
      this.winDiv.classList.remove("active");
      this.tiles.forEach((title) => {
        title.textContent = "";
      });

      if (this.who) {
        this.player.oStart();
        this.who = !this.who;
        this.turn.textContent = "O";
      } else {
        this.player.xStart();
        this.who = !this.who;
        this.turn.textContent = "X";
      }

      this.transparent.style.display = "none";
    });
  }

  tileContents() {
    this.tiles.forEach((tile) => {
      tile.addEventListener("click", () => {
        //
        this.actual.check(tile)
          ? (tile.textContent = this.player.which(this.turn))
          : alert("its already filed");

        //
        this.result(tile);
      });
    });
  }

  result(tile) {
    if (this.win.checkWinner(this.tiles)) {
      this.winDiv.classList.add("active");

      if (this.win.whoWin() === "X") {
        this.textWin.textContent = `Wins X`;
        this.gameSummary.X++;
        this.transparent.style.display = "block";
      } else if (this.win.whoWin() === "O") {
        this.textWin.textContent = `Wins O`;
        this.gameSummary.O++;
        this.transparent.style.display = "block";
      }
      this.score();
    }
  }
}

const game = new Game(
  document.querySelector(".board"),
  document.querySelectorAll(".board div"),
  document.querySelector("div.win"),
  document.querySelector("span.win"),
  document.querySelector(".reset"),
  document.querySelector(".choice"),
  document.querySelector(".ai"),
  document.querySelector(".human"),
  document.querySelector("form.players"),
  document.querySelector(".firstP"),
  document.querySelector(".secondP"),
  document.querySelector("p.first"),
  document.querySelector("span.first"),
  document.querySelector("p.second"),
  document.querySelector("span.second"),
  document.querySelector(".transparent"),
  document.querySelector(".OX")
);
