function Car(name,make, model){
    this.make = make
    this.model = model
}


var Jeep = new Car("Black", 1)

function Player(team, position, number){
    this.team = team
    this.position = position
    this.number = number
}


var jamesHarden = new Player("Rockets", "Point gaurd", 13)


function Poeple(ethnicity, race, nationality){
    this.ethnicity = ethnicity
    this.race = race
    this.nationality = nationality
}

var jordan = new Poeple ("Asian", "African-American", "American")


function pizza(type, size, sides){
    this.type = type
    this.size = size
    this.sides = sides
}

var boneless = new pizza("Boneless", "Large", "2 Liter Coke")

function musicArtist (typeOfMusic, albums, fans ){
    this.typeOfMusic = typeOfMusic
    this.albums = albums
    this.fans = fans
}

var jcole = new musicArtist("Hip-Hop", 
["2014 Forest Hills Road",
 "Mr.Nice Watch",
 "Born Sinner", 
 "4 Your Eyes Only"], 
 100000000000000000000)

console.log(jcole)



