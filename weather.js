function fillTable(respArr) {
    console.log(respArr);
    console.log(respArr[0].dt_txt);

    var current = 1;

    for (var i = 0; i < respArr.length; i++) {
        var dateTxt = new Date(respArr[i].dt_txt);

        if (dateTxt.getHours() == 0 || i == 0) {
            $("#d" + current + "day").text(dateTxt.toDateString());
            $("#d" + current + "0").text(respArr[i].main.temp);
        }

        if (dateTxt.getHours() == 3) {
            $("#d" + current + "3").text(respArr[i].main.temp);
        }

        if (dateTxt.getHours() == 21) {
            $("#d" + current + "21").text(respArr[i].main.temp);
            current += 1;
        }
    }








    
    
    console.log(theDate.getDate());
    console.log(weekday[theDate.getDay()]);

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
