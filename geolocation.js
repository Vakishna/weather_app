
/*
Example Coords:
37.33182
-122.03118
*/


// API PK
var apiKey = "pk.a640e0113a33941722dfa49eed766c02"
var lat = 0;
var qLocation, qCity, qCountry;
var long = 0;
var uri = "https://us1.locationiq.com/v1/reverse.php?key=" + apiKey + "&lat=" + lat + "&lon=" + long + "&format=json";

$('#latitude').on('input', function () {
    lat = $(this).val();
    uri = "https://us1.locationiq.com/v1/reverse.php?key=" + apiKey + "&lat=" + lat + "&lon=" + long + "&format=json";

    $.ajax({
        url: uri,
        dataType: "text"
    }).done(function (response) {
        var res = JSON.parse(response);
        console.log(JSON.parse(response));
        qLocation = res.address.city + " " + res.address.state + " " + res.address.country;
        qCity = res.address.city + "," + res.address.state;
        qCountry = res.address.country_code;
        $("#location").text(qLocation);
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
        console.log(JSON.parse(response))
        qLocation = res.address.city + " " + res.address.state + " " + res.address.country;
        qCity = res.address.city + "," + res.address.state;
        qCountry = res.address.country_code;
        $("#location").text(qLocation);
    }).fail(function () {
        console.log("Error");
        $("#location").text("");
    });
});

function geolocationSuccessCallback(position) {
    $("#latitude").val(position.coords.latitude);
    $("#longitude").val(position.coords.longitude);
    var lat = $("#latitude").val();
    var long = $("#longitude").val();

    uri = "https://us1.locationiq.com/v1/reverse.php?key=" + apiKey + "&lat=" + lat + "&lon=" + long + "&format=json";

    $.ajax({
        url: uri,
        dataType: "text"
    }).done(function (response) {
        var res = JSON.parse(response)
        console.log(JSON.parse(response))
        qLocation = res.address.city + " " + res.address.state + " " + res.address.country;
        qCity = res.address.city + "," + res.address.state;
        qCountry = res.address.country_code;
        $("#location").text(qLocation);
    }).fail(function () {
        console.log("Error");
        $("#location").text("");
    });
}

function geolocationFailureCallback() {
    alert("Unable to automatically detect location!");
}



$("#btnDetectLocation").click(function () {
    var positionOptions = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
    }

    navigator.geolocation.getCurrentPosition(
        geolocationSuccessCallback,
        geolocationFailureCallback,
        positionOptions
    );
});