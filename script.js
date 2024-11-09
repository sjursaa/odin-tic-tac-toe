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
      if (
        gameboardArray[0][0] == character &&
        gameboardArray[0][1] == character &&
        gameboardArray[0][2] == character
      ) {
        console.log("Won: top row from gameboard");
        return "Won";
      } else if (
        gameboardArray[1][0] == character &&
        gameboardArray[1][1] == character &&
        gameboardArray[1][2] == character
      ) {
        console.log("Won: middle row from gameboard");
        return "Won";
      } else if (
        gameboardArray[2][0] == character &&
        gameboardArray[2][1] == character &&
        gameboardArray[2][2] == character
      ) {
        console.log("Won: bottom row from gameboard");
        return "Won";
      } else if (
        gameboardArray[0][0] == character &&
        gameboardArray[1][0] == character &&
        gameboardArray[2][0] == character
      ) {
        console.log("Won: left column from gameboard");
        return "Won";
      } else if (
        gameboardArray[0][1] == character &&
        gameboardArray[1][1] == character &&
        gameboardArray[2][1] == character
      ) {
        console.log("Won: middle column from gameboard");
        return "Won";
      } else if (
        gameboardArray[0][2] == character &&
        gameboardArray[1][2] == character &&
        gameboardArray[2][2] == character
      ) {
        console.log("Won: right column from gameboard");
        return "Won";
      } else if (
        gameboardArray[0][0] == character &&
        gameboardArray[1][1] == character &&
        gameboardArray[2][2] == character
      ) {
        console.log("Won: top left to bottom right diagonal from gameboard");
        return "Won";
      } else if (
        gameboardArray[2][0] == character &&
        gameboardArray[1][1] == character &&
        gameboardArray[0][2] == character
      ) {
        console.log("Won: bottom left to top right diagonal from gameboard");
        return "Won";
      }
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

  const text = document.querySelector("h1");
  // turn 1 playerX
  let round = 0;
  let gameActive = true;
  while (gameActive === true) {
    let message = "no";

    while (message !== "OK" && gameActive === true) {
      console.log("player1 turn");
      let posX = prompt("numberX: p1");
      let posY = prompt("numberY: p1");
      message = gameboard.update(player1.character, posX, posY);
      if (message == "Won") {
        text.innerText = "Player 1 wins, press button to start again";
        console.log("Player1: won");
        gameboard.display();
        gameActive = false;
      }
      console.log(message);
      gameboard.display();
    }

    message = "player2";

    while (message !== "OK" && gameActive === true) {
      console.log("player2 turn");
      let posX = prompt("numberX: p2");
      let posY = prompt("numberY: p2");
      message = gameboard.update(player2.character, posX, posY);
      if (message == "Won") {
        console.log("Player2: won");
        text.innerText = "Player 2 wins, press button to start again";
        gameboard.display();
        gameActive = false;
      }
      console.log(message);
      gameboard.display();
    }

    console.log("round: " + round);
    round++;
  }
  console.log("game over");
}

// gameboard();

const button = document.querySelector(".start-button");
button.onclick = () => {
  game();
};

// game();
