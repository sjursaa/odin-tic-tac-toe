console.log("hello world");

const gameboard = (function () {
  const create = () =>
    (gameboardArray = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  const update = (character, posX, posY) => {
    if (gameboardArray[posY][posX] == 0) {
      gameboardArray[posY][posX] = character;
    } else console.log("square is already filled");
  };
  const display = () => {
    // done this way, for readability
    console.log(gameboardArray[0]);
    console.log(gameboardArray[1]);
    console.log(gameboardArray[2]);
  };
  return { create, update, display };
})();

function player(name) {
  const character = name;
  let squaresOccupied = 0;
  return { character };
}

function game() {
  // init gameboard
  gameboard.create();
  playerX = player("X");
  playerO = player("O");
  console.log(playerX);
  console.log(playerO);

  // turn 1 playerX
  gameboard.update(playerX.character, 0, 0);
  gameboard.display();
  // turn 1 playerO
  gameboard.update(playerO.character, 1, 1);
  gameboard.display();
  // turn 2 playerX
  gameboard.update("X", 0, 0);
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
