
//NAME, TYPE, HP, DEF, ATK, LEGEND
var Raichu = []
var raichuDF = 55;
var raichuNUM = 26;
var raichuTYPE = "Electric";
var raichuHP = 60;
var raichuATK = 90;
var raichuLEGEND = false;

var NinetalesDF = 75
var NinetalesNUM = 38;
var NinetalesTYPE = "Fire";
var NinetalesHP = 73;
var NinetalesATK = 76;
var NinetalesLEGEND = false;

var CloysterNUM = 91; 
var CloysterTYPE = "Ice/Water";
var CloysterHP = 50;

var GengarNUM = 94;
var GengarTYPE = "Ghost/Poison";
var GengarHP = 60;

var zapdosNUM = 145;
var zapdosTYPE = "Electric/Flying";
var zapdosHP = 90;

var BeedrillNUM = 15
var BeedrillTYPE = "Bug/Poison"
var BeedrillHP = 65


var Beedrill = [var BeedrillNUM, var BeedrillTYPE,var BeedrillHP,"Beedrill"] 
var Ninetales = [NinetalesHP, NinetalesNUM,NinetalesTYPE, "Ninetales"]
var Cloyster = [CloysterHP, CloysterNUM, CloysterTYPE, "Cloyster"]
var Gengar = [GengarHP, GengarNUM, GengarTYPE, "Gengar"]
var Zapdos = [zapdosHP, zapdosNUM, zapdosTYPE, "Zapdos"]
var myPokemonRoster = [Zapdos]

myPokemonRoster.push(Raichu,Ninetales,Cloyster, Gengar, Beedrill)


function squad() { 
    console.log(myPokemonRoster)
    
}





