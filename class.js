function pokemon(hp, level, color){
    this.hp = hp
    this.level = level
    this.color = color
}


var Blastoid = new pokemon(200,90000000, "Blue")
var Charizard = new pokemon(266,79788979, "Fire")

console.log(Blastoid)
console.log(Charizard)