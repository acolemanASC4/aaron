//Canvas
function setup(){
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.mouseClicked(youWin)
    background('black');
    for (var row=0; row<4; row++){
        for (var col=0; col<4; col++){
            var v = Math.floor(Math.random()*255);
            var g = Math.floor(Math.random()*255);
            var q = Math.floor(Math.random()*255);
            fill(v,g,q)
            rect(row*160,col*160,160,160);
        }
    }

}

row = H
col = h
var h = Math.floor(Math.random()*4);
var H = Math.floor(Math.random()*4);

var CH = Math.floor(Math.random()*640);



function Comp (){
    while (row = H){
        fill('black')
        rect( row,  col,160,160)
    }
    while (col = h){
        fill('black')
        rect( row,  col,160,160)
    }
}

function youWin(){
    if (mouseX <= 160){
        if (mouseY <=160){

        }
        if (mouseY <=320 && mouseY>160){

        }
        if (mouseY <=480 && mouseY>320){

        }
        if (mouseY <=640 && mouseY>480){

        }
    }
    if (mouseX <= 320 && mouseX > 160){
        if (mouseY <=160){

        }
        if (mouseY <=320 && mouseY>160){

        }
        if (mouseY <=480 && mouseY>320){

        }
        if (mouseY <=640 && mouseY>480){

        }
    }
    if (mouseX <= 480 && mouseX > 320){
        if (mouseY <=160){

        }
        if (mouseY <=320 && mouseY>160){

        }
        if (mouseY <=480 && mouseY>320){

        }
        if (mouseY <=640 && mouseY>480){

        }
    }
    if (mouseX <= 640 && mouseX > 480){
        if (mouseY <=160){

        }
        if (mouseY <=320 && mouseY>160){

        }
        if (mouseY <=480 && mouseY>320){

        }
        if (mouseY <=640 && mouseY>480){

        }
    }
    alert("You win!");
}