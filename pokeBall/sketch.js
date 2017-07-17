
function setup() {  // setup() runs once
  frameRate(30);
  createCanvas(1000, 1000);
  fill(0,0,0)
  ellipse(200, 200, 200,200);
  fill(255,0,0)
  ellipse(200,200,50,50);
  
 var yPos = 10;
function draw() {  // draw() loops forever, until stopped
  background(204);
  ellipse(230,200,50,50);
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = 20;
  }
  line(0, 0, 5, 3);
}

}

}
var xPos = 0;
function draw() {  // draw() loops forever, until stopped
  background(204);
  ellipse(230,200,50,50);
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(0, yPos, width, yPos);
}

}


// function setup() {
//   createCanvas(1000, 1000);
//   ellipse(200, 200, 200,200);
//   ellipse(230,200,50,50);
