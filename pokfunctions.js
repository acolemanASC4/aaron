
//function rand(num){
//  return Math.floor(Math.random()*num);
//}
//
//function randLetter(){
//  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  // return alphabet[rand(52)];
//  return alphabet[rand(52)];
//}
//
//function randWord(length){
//  var tempWord = "";
//  
//  for (var i = 0; i<length;i++){
//    tempWord = tempWord + randLetter();
//  }
//  
//  return tempWord;
//}
//
//function randsentence(words){
//    var sent = "" 
//    
//    for (var i = 0; i<words; i++){
//        sent =  sent + randWord(words) + "  "
//    }
//    return sent
//}
//
//console.log(randsentence(6)+ ".")


var pok1 = ["Gengar", 70, 100]
var pok2 = ["Raichu",35, 180]

function tendoPain(){
   var pain =  pok2[2] - pok1[1]
   pok2[2] = pain 
   console.log("Raichu was hit and its' stats are " + pok2 )
}

tendoPain()









