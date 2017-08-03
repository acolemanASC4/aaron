var HP = 100;
var gold = 0;
var ogreDefeated= 0;

function displayStats(){
    $('#stats').text('It Works!!');
}
function attack(){
    alert('You Killed an Ogre. You win at life!')
}

function setup(){
$('body').append( "<h1>Welcome to Ogre GAME</h1>" );
$('body').append('<div><h3>Stats</h3><p id="stats"></p></div>');
$('body').append("<button onclick='attack()'>Attack</button>");
$('body').append('<div id="ogre"></div>')
}


//wiat until document is ready!!!
$(document).ready(setup)