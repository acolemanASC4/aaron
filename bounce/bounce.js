var v = Math.floor(Math.random()*255)
var q = Math.floor(Math.random()*255)
var p = Math.floor(Math.random()*255)

function setup() {
    cnv = createCanvas(windowWidth, windowHeight)
    background(v,q,p)
}

var x = 100
var y = 100
var s = 100
var xIncrement = 5
var yIncrement = 1

function draw(){
    background(v,q,p)
    fill(q,v,p)
    ellipse(x,y,s)
    x += xIncrement;
    y += yIncrement

    if (x >= windowWidth - 50 || x <= 50){
        xIncrement = -xIncrement
        background(p,q,v)
    }
    if (y >= windowHeight - 50 || y <= 50){
        yIncrement = -yIncrement
        background(v,q,p)
    }
}

