function fillTable(respArr) {
    console.log(respArr);
    console.log(respArr[0].dt_txt);
    var year = 

    //var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);


    //$("#forcastTable").append("<tr><td>Lol</td></tr > ")





}

$('#btnGetWeather').click(function () {
    var apiKeyWeather = "6c3091009f9f9e2d24f99ea2f8af350c";
    var uriWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + qCity + "&units=metric" + "&appid=" + apiKeyWeather;

    $.ajax({
        url: uriWeather,
        dataType: "text"
    }).done(function (response) {
        var res = JSON.parse(response);
        fillTable(res.list);

    }).fail(function (response) {
        console.log("Weather Error" + response);
    });
   alert(uriWeather);
});
