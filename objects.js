
function pokemon(NAME, TYPE, HP, DEF, ATK, LEGEND){
    this.NAME = NAME; this.TYPE = TYPE; this.HP = HP; this.DEF = DEF; this.ATK = ATK; this.LEGEND = LEGEND
}


var Raichu = new pokemon("Raichu" ,"Electric", 90, 55, 90, false)
var Ninetales = new pokemon("Ninetale", "Fire", 120, 75, 76,false)
var Cloyster = new pokemon("Cloyster", "Ice/Water", 80, 180, 95, false)
var Charizard = new pokemon("Charizard", "Fire", 130, 84, 78, false)
var Umbreon = new pokemon("Umbreon", "Dark", 150, 65, 110, false) 
var Decidueye =  new pokemon("Decidueye", "Grass/Ghost", 130, 107, 75, false) 
var Wishiwashi = new pokemon("Wishiwashi", "Water", 95, 140, 130, false)
var Lucario = new pokemon("Lucario", "Fighting/Steel", 115, 110, 70, false) 
var Abomasnow = new pokemon("Abomasnow", "Grass/Ice", 160, 92, 75, false)
var Obama = new pokemon("Obama", "Political", 999999,999999,999999, true)


var myRoster = [ Raichu, Ninetales, Cloyster, Charizard, Umbreon, Decidueye, Wishiwashi, Lucario, Abomasnow, Obama]

function printMyRoster() {
    for (var i = 0; i<myRoster.length; i++){
        console.log(myRoster[i]);
    }
}

function rand(){
    return Math.floor(Math.random()*myRoster.length) ;
}

function choice(){
    console.log(myRoster[rand] + " emergers and cause 30 Damage each of your pokemon. You can not escape, you must fight for your life")
    for (var i =0; i<myRoster.length; i++){
        myRoster[i].HP -= 30
    }
}



function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function playerChoice(){
var prompt = require('prompt-sync')();
var pc = console.log(myRoster) + prompt("Who do you choose?  ") 
for () 
//use a for loop to search for the name of the pokemon and then use that index position to print the pokemon and stats
console.log(myRoster[pc] + " I choose you!!!!!")
}
choice()
playerChoice()




//Subtracts 10 HP from the pokemon
function pokemonAttacked() {
    for (var i = 0; i<roster.length; i++){
        roster[i].hp -= 10;
    }
}


