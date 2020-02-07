"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
// $('#get-fortune-button').on('click', () => {;
  $.get('/fortune', (response) => {
    $('#fortune-text').html(response);
  });
// });
}
$('#get-fortune-button').on('click', showFortune);
  // $('#fortune-text').text(response)




// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (res) => {
      $('#weather-info').html(`Forecast: ${res.forecast}`);
    });


}    // TODO: request weather with that URL and show the forecast in #weather-info


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


