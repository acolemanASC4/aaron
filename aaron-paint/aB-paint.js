
// Drag the mouse across the page
// to change its value
function setup(){
  var value = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var q = Math.floor(Math.random()*255);
    rect(30, 20, 55, 55);
    cnv = createCanvas(500, 500); 
  cnv.mouseClicked(changeGray)
  background(value,g,q) 
  
}

function changeGray(){
var value = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var q = Math.floor(Math.random()*255);
    rect(30, 20, 55, 55);
    createCanvas(500, 500)
    background(value,g,q)
 }

function mouseMoved() {
  var value = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var q = Math.floor(Math.random()*255); 
  fill(value,q,g)
  var s = Math.floor(Math.random()*3);
  if (s==0){
      rect(mouseX, mouseY, random(40) + 20, random(40) +20)
  } else if (s==1) {
      ellipse(mouseX, mouseY, random(40) + 20, random(40)+ 20)
  } else if(s==2) {
      triangle(mouseX, mouseY, mouseX + random(40)+20, mouseY + random(40)+20, mouseX + random(40)+20, mouseY + random(40)+20 )

  }
  // prevent default
  return false;
}
//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}
