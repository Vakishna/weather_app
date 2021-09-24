﻿/* 
us1.locationiq.com/v1/reverse.php?key=pk.a640e0113a33941722dfa49eed766c02&lat=-37.9060602&lon=145.1941778&format=json
*/
var apiKey = "pk.a640e0113a33941722dfa49eed766c02"
var lat = 0;
var long = 0;
var uri = "https://us1.locationiq.com/v1/reverse.php?key=" + apiKey + "&lat=" + lat + "&lon=" + long + "&format=json";

/*
Example Coords:
37.33182
-122.03118
*/

$('#latitude').on('input', function () {
    lat = $(this).val();
    uri = "https://us1.locationiq.com/v1/reverse.php?key=" + apiKey + "&lat=" + lat + "&lon=" + long + "&format=json";

    $.ajax({
        url: uri,
        dataType: "text"
    }).done(function (response) {
        var res = JSON.parse(response)
        $("#location").text(res.address.city);
    }).fail(function () {
        $("#location").text("");
    });
});


$('#longitude').on('input', function () {
    long = $(this).val();
    uri = "https://us1.locationiq.com/v1/reverse.php?key=" + apiKey + "&lat=" + lat + "&lon=" + long + "&format=json";

    $.ajax({
        url: uri,
        dataType: "text"
    }).done(function (response) {
        var res = JSON.parse(response)
        $("#location").text(res.address.city);
    }).fail(function () {
        console.log("Error");
        $("#location").text("");
    });
});


