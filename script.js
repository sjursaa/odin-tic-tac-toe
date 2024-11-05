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
  // init gameboard & players
  gameboard.create();
  player1 = player("X");
  player2 = player("O");

  // turn 1 playerX
  let round = 0;
  while (round < 4) {
    console.log("player1 turn");
    gameboard.update(player1.character, 0, 0);
    gameboard.display();

    console.log("player2 turn");
    gameboard.update(player2.character, 1, 1);
    gameboard.display();

    console.log("round: " + round);
    round++;
  }

  // final round
  console.log("player1 turn");
  gameboard.update(player1.character, 0, 0);
  gameboard.display();
  // // turn 2 playerX
  // gameboard.update("X", 0, 0);
  // gameboard.display();
  // // turn 2 playerO
  // gameboard.update("O", 2, 1);
  // gameboard.display();
  // // // turn 3 playerX
  // gameboard.update("X", 2, 0);
  // gameboard.display();
}

// gameboard();
game();
