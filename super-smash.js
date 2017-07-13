

var mashArray = ["Super Mario World", "Final Destination", "Shack", "Fry Cook Station"];
var firstQuestion = [1,2,3,4]
var secondQuestion =["Sethical", "Broly", "Xxxtenation"]; 

function begin(){
    var prompt = require('prompt-sync')();
    var ice = prompt('How many times do you want to strike? ');
    var nice = prompt('Who will choose want to fight? Press 0 for Sethical, 1 for Broly and 2 for Xxxtenation ')
    var place = prompt('Where will you fight? Press 0 for Super Mario World, 1 for Final Destination, 2 for the Shack amd 3 for the Fry Cook Station ')
    firstQuestion.push(ice)
    console.log("You hit " + secondQuestion[nice] + " in the " + mashArray[place] + " " + ice + " times delivering a painful death!!!")
   
}

begin()
console.log("That was and intant dub!!")

var playAgain = ["y", "n"];
var prompt = require('prompt-sync')();
var restart = prompt('Do you want to play again? ' + '[' + playAgain + '] ')

if (restart === playAgain[0]){
    begin();
    var prompt = require('prompt-sync')();
    console.log("That was and intant dub!!");
    restart = prompt('Do you want to play again? ' + '[' + playAgain + '] ')
} else (console.log ("Thanks for playing, Good Bye."))
   





