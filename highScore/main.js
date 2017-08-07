

var choices = ["rock", "paper","scissors"]



var results = "Reload the page and choose one of the choices" ;

var humanchoice = prompt("Choose 0 for Rock, 1 for Paper and 2 for Scissors")
console.log(humanchoice)

var randomChoice = Math.floor(Math.random()*3)

var p1Choice = choices[humanchoice]
var p2Choice = choices[randomChoice]

console.log(p2Choice)


$(document).ready(function(){
  if(p1Choice === p2Choice){
    results = "It's a tie"
    $(".results").append("<p>" + results + "</p>");
  }else if (p1Choice === "scissors"){
    if (p2Choice ==="rock"){
      results = "Rock beats Scissors"
      $(".results").append("<p>" + results + "</p>");
    }else{ results = "Scissors beats Paper"
    $(".results").append("<p>" + results + "</p>");
  }
  }else if (p1Choice === "rock"){
    if (p2Choice === "paper"){
      results = "Paper beats rock"
      $(".results").append("<p>" + results + "</p>");
    }else {
      results = "Rock beats Scissors"
      $(".results").append("<p>" + results + "</p>");
    }
  }else if (p1Choice === "paper"){
    if (p2Choice === "rock"){
      results = "Paper beats Rock"
      $(".results").append("<p>" + results + "</p>");
    }else{
      results = "Scissors beats Paper"
      $(".results").append("<p>" + results + "</p>");
    }
  }
  $(".results").append("<p>" + results + "</p>");


$(".zero").click(function(){
  choices[0]
})

$(".one").click(function(){
  alert("I've been hit")
})

$(".two").click(function(){
  alert("I've been hit")
})




})

