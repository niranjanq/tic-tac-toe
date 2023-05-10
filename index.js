console.log("Welcome to tic tac toe");
var turn = true;
var board = [null, null, null, null, null, null, null, null, null];

var welcome = document.querySelector(".welcome");

// function to change turn
const changeTurn = () => {
  turn = "X" ? "O" : "X";
};

// Function to check win

var win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWin = () => {
  let winner = null;
  win.map((w) => {
    if (board[w[0]] === 1 && board[w[1]] === 1 && board[w[2]] === 1) {
      winner = "X";
    } else if (board[w[0]] === 0 && board[w[1]] === 0 && board[w[2]] === 0) {
      winner = "O";
    }
  });
  return winner;
};

const setBoardClear = (winner) => {
  board = [null, null, null, null, null, null, null, null, null];
  turn = true;
  let box = document.querySelectorAll(".boxtext");
  box.forEach((e) => (e.innerHTML = ""));
};

// Game logic
let boxes = document.getElementsByClassName("cont1");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      let num = boxtext.getAttribute("data");
      board[parseInt(num)] = turn ? 1 : 0;
      console.log(board);
      boxtext.innerText = turn ? "X" : "O";
      turn = !turn;
      var winner = checkWin();
      if (winner) {
        welcome.innerHTML = `${winner} is The Winner`;
        setBoardClear(winner);
      }
      document.getElementsByClassName("info")[0].innerText = `Turn for ${
        turn ? "X" : "O"
      }`;
    }
  });
});
