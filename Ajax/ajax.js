function setup(){
$.ajax({
    url:'https://randomuser.me/api/',
    dataType: 'json',
  success: function(data) {
    console.log(data.results[0]);
    $('body').append(
    '<img src= "'+data.results[0].picture.large+'"><p>' + 
     data.results[0].name.first + '</p><p>' +
    data.results[0].name.last + '</p><p>' +
    data.results[0].nat + '</p>')
  }
    })
}
$(document).ready(setup)
