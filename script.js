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
    (gameboardArray[positionX][positionY] = character);
  const display = () => console.log(gameboardArray);
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
  // let currentTurn = playerX.character;
  // console.log(playerX.character);
  gameboard.create();
  gameboard.update("X", 0, 0);
  gameboard.display();
}

// gameboard();
game();
