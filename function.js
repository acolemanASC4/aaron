function hello() {console.log('Hello, World');}
//calling the fuction below
hello()

//an addition funtion based on 3 imputs
function fUnMaTh (x,y,z){
    return (x + y + z)   
}
//to simplify the recall and printing with console.log 
//make sure to apply the 3 terms wanted to be summed
var Q = fUnMaTh(2,4,6) 
    console.log(Q)
//-----------------------------------------
//Random # function
function rand(num){
    return Math.floor(Math.random()*num) ;
}

console.log(rand(1000000000))


var people = ["Chris", "Will", "Edgar", "Aaron", "Cool Nick"]

function getRandomWinner(index){
    var randomIndex = Math.floor(Math.random()*index)
    return  randomIndex
}

console.log(people[getRandomWinner(people.length)])


