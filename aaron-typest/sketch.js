
var inp;
var prompt;
var s = ["Boneless", "Yahoo Gang", "Snipe Code", "Hue Mungus", "Cool Nick", "Kamehame HAA!!!!!"]
var vz = Math.floor(Math.random()* s.length)
var points = 0;
function setup(){
    var v = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var q = Math.floor(Math.random()*255);
    cnv = createCanvas(1300, 700); 
  cnv.mouseClicked(changeGray)
  background(v,g,q)

textSize(20);
text("Test Your Skillz!! Click the Screen for a new word.Type the word below.", 550, 150);


text(s[vz], 550, 250, 7000, 8000);

  inp = createInput("" , "text");
  inp.position(550,350)
  inp.size(250, 50);
  prompt = prompt(" What word do you want to work on? " )
  s.push(prompt)

}

function keyPressed(){
    if (keyCode === ENTER){
        var v = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var q = Math.floor(Math.random()*255);
    cnv = createCanvas(1300, 700); 
  cnv.mouseClicked(changeGray)
  background(v,g,q)
        textSize(20);
        text("Test Your Skillz!!Click the Screen for a new word. Type the word below.", 550, 150);
        text(s[vz], 550, 250, 7000, 8000);
        if (inp.value() === s[vz]){
            alert("Correct!!")
            points = points + 10
            textSize(40);
            text("Points", 200, 300)
            text(points, 200, 400);
        } else if (inp.value()!= s[vz]) {
            alert("Try again")
        }
    }
}

function changeGray(){
var v = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var q = Math.floor(Math.random()*255);
vz = Math.floor(Math.random()*6)
    //createCanvas(1300, 700)
    background(v,g,q)

    textSize(20);
text("Test Your Skillz!!Click the Screen for a new word.Type the word below.", 550, 150);

text(s[vz], 550, 250, 1200, 1200);
 }