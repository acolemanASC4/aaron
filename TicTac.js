board = [
  ["-","-","-"],
  ["-","-","-"],
  ["-","-","-"]
  ];

function printBoard(board){
  console.log(board[0][0] + board[0][1] + board[0][2]);
  console.log(board[1][0] + board[1][1] + board[1][2]);
  console.log(board[2][0] + board[2][1] + board[2][2]);
}

printBoard(board);

// Just adding a separator
console.log("================================");

var prompt = require('prompt-sync')();

var y = prompt("What row do you want to pick? (1-3)");
y=Number(y)-1;

x = prompt("What column do you want to pick? (1-3)");
var x = Number(x)-1

board[y][x]="X";

printBoard(board);