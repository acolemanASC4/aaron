// welcome to Ace's Boujee Bodega
//where everything is $100 or more

var prompt = require('prompt-sync')();
//allows use of prompt

var cat = "CoolCat247"
var money = 1000
var name = prompt("What is your name strange man? ");
var spend = prompt("What would you like? ")

while(money > 0){
    var spend = prompt("What would you like? ")
    console.log("You purchased the " + spent)
    money = money - 100 
}


// var promptSync = require('prompt-sync')();

// var money = 1000;
// var items = [];

// while(money>99){
//   console.log("You have $"+ money +" left. Sword = $500, Food = $100");
//   var answer = promptSync("Which item do you want to buy? ");
//   if(answer == "Sword"){
//     money = money - 500;
//     items.push("Sword");
//     console.log("You brought a Sword!");
//   }else if(answer == "Food"){
//     money = money - 100;
//     items.push("Food");
//     console.log("You brought Food!");
//   }else{
//     console.log("I didn't understand your answer. Try again.");
//   }
// }
