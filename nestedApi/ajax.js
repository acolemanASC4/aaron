

function setup(){
    $.ajax({
        url:'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data.results[0]);
            $('body').append(
            '<img src= "'+data.results[0].picture.large+'"><p>' + 
            data.results[0].name.first + " " +
            data.results[0].name.last + '</p><p>' +
            data.results[0].nat + '</p>')
            var nat = data.results[0].nat
            $.ajax({
                url: 'https://restcountries.eu/rest/v2/alpha?codes=' + nat,
            }).done(function(data){
            console.log(data[0].flag);
            $('body').append('<img src= "'+data[0].flag+'">')
            })
        }
    })

}
$(document).ready(setup)