export class Winner {
  constructor() {
    let win;
  }

  whoWin() {
    return this.win;
  }

  checkWinner(board) {
    const xWin = "XXX";
    const oWin = "OOO";

    const firstWinPosition =
      board[0].innerHTML + board[1].innerHTML + board[2].innerHTML;
    const secondWinPosition =
      board[3].innerHTML + board[4].innerHTML + board[5].innerHTML;
    const thirdWinPosition =
      board[6].innerHTML + board[7].innerHTML + board[8].innerHTML;
    const fourthWinPosition =
      board[0].innerHTML + board[3].innerHTML + board[6].innerHTML;
    const fifthWinPosition =
      board[1].innerHTML + board[4].innerHTML + board[7].innerHTML;
    const sixWinPosition =
      board[2].innerHTML + board[5].innerHTML + board[8].innerHTML;
    const sevenWinPosition =
      board[0].innerHTML + board[4].innerHTML + board[8].innerHTML;
    const eightWinPosition =
      board[2].innerHTML + board[4].innerHTML + board[6].innerHTML;

    if (
      firstWinPosition === xWin ||
      secondWinPosition === xWin ||
      thirdWinPosition === xWin ||
      fourthWinPosition === xWin ||
      fifthWinPosition === xWin ||
      sixWinPosition === xWin ||
      sevenWinPosition === xWin ||
      eightWinPosition === xWin
    ) {
      this.win = "X";
      return true;
    } else if (
      firstWinPosition === oWin ||
      secondWinPosition === oWin ||
      thirdWinPosition === oWin ||
      fourthWinPosition === oWin ||
      fifthWinPosition === oWin ||
      sixWinPosition === oWin ||
      sevenWinPosition === oWin ||
      eightWinPosition === oWin
    ) {
      this.win = "O";
      return true;
    } else {
      return false;
    }
  }
}
