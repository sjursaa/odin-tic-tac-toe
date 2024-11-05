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
      return "OK";
    } else return "square is already filled";
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
    let message = "no";
    console.log("player1 turn");

    while (message != "OK") {
      let posX = prompt("numberX: p1");
      let posY = prompt("numberY: p1");
      message = gameboard.update(player1.character, posX, posY);
      console.log(message);
      gameboard.display();
    }

    message = "player2";

    console.log("player2 turn");
    while (message != "OK") {
      let posX = prompt("numberX: p2");
      let posY = prompt("numberY: p2");
      message = gameboard.update(player2.character, posX, posY);
      console.log(message);
      gameboard.display();
    }

    console.log("round: " + round);
    round++;
  }

  // final round
  console.log("final move: ");
  let posX = prompt("numberX: p1");
  let posY = prompt("numberY: p1");
  message = gameboard.update(player1.character, posX, posY);
  console.log(message);
  gameboard.display();
}

// gameboard();

const button = document.querySelector(".start-button");
button.onclick = () => {
  game();
};

// game();
