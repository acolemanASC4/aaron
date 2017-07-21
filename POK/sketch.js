var v = Math.floor(Math.random()*255)
var q = Math.floor(Math.random()*255)
var p = Math.floor(Math.random()*255)
var randPok = Math.floor(Math.random()*10)
var POK = myRoster[randPok]
var button;
var button1;
var button2;
var button3;
function setup(){
    cnv = createCanvas(windowWidth, windowHeight)
    cnv.mouseClicked(changeGray)
    background(v,q,p)
    
    rect(windowWidth/2, 0, windowWidth,300)
    rect(0,0,windowWidth/2, 300)
    rect(0,windowHeight/2,windowWidth, 100)
    
    //base
    rect(0,windowHeight/2 + 100,600,300)
    rect(windowWidth/2 + 100,windowHeight/2 + 100,600,300)
    button = createButton('Attack');
    button.size(90,20)
    button.position(30, windowHeight/2 + 200);
    button.mousePressed(fightMe)

    button1 = createButton('Defence');
    button1.size(90,20)
    button1.position(150, windowHeight/2 + 200);
    button1.mousePressed(fightMe)

    button2 = createButton('Attack');
    button2.size(90,20)
    button2.position(windowWidth/2 + 130, windowHeight/2 + 200);
    button2.mousePressed(fightMe)

    button3 = createButton('Defence');
    button3.size(90,20)
    button3.position(windowWidth/2 + 250, windowHeight/2 + 200);
    button3.mousePressed(fightMe)
    

    textSize(32);
    text("Pokemon", windowWidth/4, windowHeight/4);

    textSize(32);
    text(POK.NAME , windowWidth/2 + 150, windowHeight/4)
//inside boxes buttons
}
 



function changeGray(){
    var v = Math.floor(Math.random()*255)
    var q = Math.floor(Math.random()*255)
    var p = Math.floor(Math.random()*255)
    // createCanvas(windowWidth, windowHeight)
    background(v,q,p)
    rect(windowWidth/2, 0, windowWidth,300)
    rect(0,0,windowWidth/2, 300)
    rect(0,windowHeight/2,windowWidth, 100)
    rect(0,windowHeight/2 + 100,600,300)
    rect(windowWidth/2 + 100,windowHeight/2 + 100,600,300)
    textSize(32);
    text("Pokemon", windowWidth/4, windowHeight/4);
    textSize(32);
    text("Pokemon", windowWidth/2 + 150, windowHeight/4)
    }



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

// function pokComputer(){
    
//     }

    function fightMe(pokemon) {
        ;}




