function fillTable(respArr) {
    console.log(respArr);
    console.log(respArr[0].dt_txt);

    var current = 1;

    for (var i = 0; i < respArr.length; i++) {
        var dateTxt = new Date(respArr[i].dt_txt);

        if (i == 0) {
            $("#d" + current + "day").text(dateTxt.toDateString());
        }

        if (dateTxt.getHours() == 0) {
            $("#d" + current + "day").text(dateTxt.toDateString());
            $("#d" + current + "0").text(respArr[i].main.temp);
        }

        if (dateTxt.getHours() == 3) {
            $("#d" + current + "3").text(respArr[i].main.temp);
        }

        if (dateTxt.getHours() == 6) {
            $("#d" + current + "6").text(respArr[i].main.temp);
        }

        if (dateTxt.getHours() == 9) {
            $("#d" + current + "9").text(respArr[i].main.temp);
        }

        if (dateTxt.getHours() == 12) {
            $("#d" + current + "12").text(respArr[i].main.temp);
        }

        if (dateTxt.getHours() == 15) {
            $("#d" + current + "15").text(respArr[i].main.temp);
        }

        if (dateTxt.getHours() == 18) {
            $("#d" + current + "18").text(respArr[i].main.temp);
        }

        if (dateTxt.getHours() == 21) {
            $("#d" + current + "21").text(respArr[i].main.temp);
            current += 1;
        }
    }
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
        alert("Error filling table!");
    });
   alert(uriWeather);
});
