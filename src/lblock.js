class lBlock extends Tetromino {
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

  rotate(board, activeBlocks, keys) {
    if (this.orientation == "first") {
      this.rotateFirst(board, activeBlocks, keys);
    } else if (this.orientation == "second") {
      this.rotateSecond(board, activeBlocks, keys);
    } else if (this.orientation == "third") {
      this.rotateThird(board, activeBlocks, keys);
    } else if (this.orientation == "fourth") {
      this.rotateFourth(board, activeBlocks, keys);
    }
    Gameplay.populateBoard();
  }

  rotateFirst(board, activeBlocks, keys) {
    const currentTopRow = keys[0];
    const bottomRow = keys[1];
    const futureTopRow = Tetromino.nextLetterRowUpwards(currentTopRow);
    const furthestLeftIndex = activeBlocks[currentTopRow][0];
    const pillarIndex = activeBlocks[currentTopRow][1];
    const furthestRightIndex = activeBlocks[currentTopRow][2];

    board[currentTopRow][furthestLeftIndex] = null;
    board[futureTopRow][furthestLeftIndex] = "lBlock";
    board[currentTopRow][furthestRightIndex] = null;
    board[futureTopRow][pillarIndex] = "lBlock";
    board[bottomRow][furthestLeftIndex] = null;
    board[bottomRow][pillarIndex] = "lBlock";

    this.orientation = "second";
  }

  rotateSecond(board, activeBlocks, keys) {
    // const topRow = keys[0];
    // const centerRow = keys[1];
    // const bottomRow = keys[2];

    // const furthestLeftIndex = activeBlocks[bottomRow][0];
    // const bottomRightIndex = activeBlocks[bottomRow][1];
    // const topIndex = activeBlocks[topRow][0];

    // board[bottomRow][furthestLeftIndex] = null;
    // board[topRow][furthestLeftIndex] = "jBlock";
    // board[bottomRow][bottomRightIndex] = null;
    // board[centerRow][bottomRightIndex - 1] = "jBlock";
    // board[topRow][topIndex] = null;
    // board[centerRow][topIndex + 1] = "jBlock";

    this.orientation = "third";
  }

  rotateThird(board, activeBlocks, keys) {
    // const topRow = keys[0];
    // const centerRow = keys[1];
    // const bottomRow = Tetromino.nextLetterRowDownwards(centerRow);
    // const leftTopIndex = activeBlocks[topRow][0];
    // const leftBottomIndex = activeBlocks[centerRow][0];
    // const furthestRightIndex = activeBlocks[centerRow][2];

    // board[topRow][leftTopIndex] = null;
    // board[topRow][leftTopIndex + 1] = "jBlock";
    // board[centerRow][furthestRightIndex] = null;
    // board[topRow][furthestRightIndex] = "jBlock";
    // board[centerRow][leftBottomIndex] = null;
    // board[bottomRow][leftBottomIndex + 1] = "jBlock";

    this.orientation = "fourth";
  }

  rotateFourth(board, activeBlocks, keys) {
    // const topRow = keys[0];
    // const centerRow = keys[1];
    // const bottomRow = keys[2];
    // const topLeftIndex = activeBlocks[topRow][0];
    // const topRightIndex = activeBlocks[topRow][1];
    // const bottomIndex = activeBlocks[bottomRow][0];

    // board[topRow][topLeftIndex] = null;
    // board[centerRow][topLeftIndex - 1] = "jBlock";
    // board[topRow][topRightIndex] = null;
    // board[bottomRow][topRightIndex] = "jBlock";
    // board[bottomRow][bottomIndex] = null;
    // board[centerRow][topRightIndex] = "jBlock";

    this.orientation = "first";
  }
}