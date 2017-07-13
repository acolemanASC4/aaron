var choices = ["rock", "paper","scissors"]

var prompt = require('prompt-sync')();

var humanchoice = prompt("Choose 0 for Rock, 1 for Paper and 2 for Scissors      ")

var randomChoice = Math.floor(Math.random()*3)

var p1Choice = choices[humanchoice]
var p2Choice = choices[randomChoice]

if(p1Choice === p2Choice){
  console.log("It's a tie")
}else if (p1Choice === "scissors"){
  if (p2Choice ==="rock"){
    console.log("Rock beats Scissors")
  }else{ console.log("Scissors beats Paper")
}
}else if (p1Choice === "rock"){
  if (p2Choice === "paper"){
    console.log("Paper beats rock")
  }else {
    console.log("Rock beats Scissors")
  }
}else if (p1Choice === "paper"){
  if (p2Choice === "rock"){
    console.log("Paper beats Rock")
  }else{
    console.log("Scissors beats Paper")
  }
}