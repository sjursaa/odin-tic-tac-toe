console.log("hello world");

const gameboard = (function () {
  // let gameboardArray = [
  //   [0, 0, 0],
  //   [0, 0, 0],
  //   [0, 0, 0],
  // ];
  // console.log(gameboardArray);
  // create = [[0, 0, 0]]
  const create = () =>
    (gameboardArray = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  const update = (character, positionX, positionY) =>
    (gameboardArray[positionY][positionX] = character);
  const display = () => {
    // done this way, for readability
    console.log(gameboardArray[0]);
    console.log(gameboardArray[1]);
    console.log(gameboardArray[2]);
  };
  return { create, update, display };
})();

function playerX() {
  let character = "X";
  let squaresOccupied = 0;
}

function playerO() {
  let character = "O";
}

function game() {
  // init gameboard
  gameboard.create();
  // turn 1 playerX
  gameboard.update("X", 0, 0);
  gameboard.display();
  // turn 1 playerO
  gameboard.update("O", 1, 1);
  gameboard.display();
  // turn 2 playerX
  gameboard.update("X", 1, 0);
  gameboard.display();
  // turn 2 playerO
  gameboard.update("O", 2, 1);
  gameboard.display();
  // // turn 3 playerX
  gameboard.update("X", 2, 0);
  gameboard.display();
  console.log("Player X wins");
  // // turn 3 playerO
  // gameboard.update("O", 1, 1);
  // gameboard.display();
}

// gameboard();
game();
