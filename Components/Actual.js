export class Actual {
  constructor() {}

  check(tile) {
    if (!tile.textContent) {
      return true;
    } else {
      return false;
    }
  }
}
