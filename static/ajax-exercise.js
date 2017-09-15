"use strict";


// PART 1: SHOW A FORTUNE

// function showFortune(fortune) {
    // var fortune = result;
//     $('#fortune-text').html(fortune);
//     console.log(fortune);
// }

function getFortune(evt) {
    $.get('/fortune', function(fortune){
        $('#fortune-text').html(fortune);
        console.log(fortune);
    });
}
    // TODO: get the fortune and show it in the #fortune-text div

$('#get-fortune-button').on('click', getFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, function(weather_info) {
        $("#weather-info").html(weather_info['forecast']);
        console.log(weather_info['forecast']);
    });

}

// experiment :)
/*    var zip = $("#zipcode-field").val();

    zip = "?zipcode=" + zip;

    console.log(zip);
*/
$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


