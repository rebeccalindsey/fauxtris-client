class lBlock extends FourRotation {
  constructor(orientation) {
    super(orientation);
    this.active = true;
    Tetromino.activeBlock = this;
    this.populateLBlock();
  }

  populateLBlock() {
    for (let i = 3; i < 6; i++) {
      Gameplay.gameBoard["tRow"][i] = "lBlock";
    }
    Gameplay.gameBoard["sRow"][3] = "lBlock";
    Gameplay.populateBoard();
  }

  rotateFirst(activeBlocks, keys) {
    const centerRow = keys[0];
    const bottomRow = keys[1];
    const topRow = Tetromino.nextLetterRowUpwards(centerRow);
    const leftIndex = activeBlocks[centerRow][0];
    const centerIndex = activeBlocks[centerRow][1];
    const rightIndex = activeBlocks[centerRow][2];

    const blocksToRemove = {};
    const blocksToAdd = {};

    blocksToRemove[centerRow] = [leftIndex, rightIndex];
    blocksToRemove[bottomRow] = [leftIndex];
    blocksToAdd[topRow] = [leftIndex, centerIndex];
    blocksToAdd[bottomRow] = [centerIndex];

    if (Gameplay.validMove(blocksToAdd)) {
      this.updateBlocks(blocksToAdd, blocksToRemove);
      this.orientation = "second";
    }
  }

  rotateSecond(activeBlocks, keys) {
    const topRow = keys[0];
    const centerRow = keys[1];
    const bottomRow = keys[2];
    const leftIndex = activeBlocks[topRow][0];
    const centerIndex = activeBlocks[topRow][1];
    const rightIndex = centerIndex + 1;

    const blocksToRemove = {};
    const blocksToAdd = {};

    blocksToRemove[topRow] = [leftIndex, centerIndex];
    blocksToRemove[bottomRow] = [centerIndex];
    blocksToAdd[centerRow] = [leftIndex, rightIndex];
    blocksToAdd[topRow] = [rightIndex];

    if (Gameplay.validMove(blocksToAdd)) {
      this.updateBlocks(blocksToAdd, blocksToRemove);
      this.orientation = "third";
    }
  }

  rotateThird(board, activeBlocks, keys) {
    const topRow = keys[0];
    const centerRow = keys[1];
    const bottomRow = Tetromino.nextLetterRowDownwards(centerRow);
    const leftIndex = activeBlocks[centerRow][0];
    const centerIndex = activeBlocks[centerRow][1];
    const rightIndex = activeBlocks[centerRow][2];

    board[centerRow][leftIndex] = null;
    board[bottomRow][centerIndex] = "lBlock";
    board[topRow][rightIndex] = null;
    board[topRow][centerIndex] = "lBlock";
    board[centerRow][rightIndex] = null;
    board[bottomRow][rightIndex] = "lBlock";

    this.orientation = "fourth";
  }

  rotateFourth(board, activeBlocks, keys) {
    const topRow = keys[0];
    const centerRow = keys[1];
    const bottomRow = keys[2];
    const leftIndex = activeBlocks[centerRow][0] - 1;
    const centerIndex = activeBlocks[centerRow][0];
    const rightIndex = activeBlocks[bottomRow][1];

    board[topRow][centerIndex] = null;
    board[centerRow][leftIndex] = "lBlock";
    board[bottomRow][centerIndex] = null;
    board[bottomRow][leftIndex] = "lBlock";
    board[bottomRow][rightIndex] = null;
    board[centerRow][rightIndex] = "lBlock";

    this.orientation = "first";
  }
}
