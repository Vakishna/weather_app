function plotChart(respArr) {  
    $("#myCanvas").remove();
    $(".ChartContainer").append("<canvas id=\"myCanvas\" width=\"800\" height=\"625\" style=\"border: 1px solid #000000; background-color: #FFA07A; \">Your browser does not support the HTML canvas tag.</canvas >")

    var chart = document.getElementById("myCanvas");
    var ctx = chart.getContext("2d");


    ctx.moveTo(0, 125);
    ctx.lineTo(800, 125);
    ctx.stroke();


    ctx.moveTo(0, 250);
    ctx.lineTo(800, 250);
    ctx.stroke();

    ctx.moveTo(0, 375);
    ctx.lineTo(800, 375);
    ctx.stroke();

    ctx.moveTo(0, 500);
    ctx.lineTo(800, 500);
    ctx.stroke();

    ctx.font = '14px serif';
    ctx.fillText('40°', 0, 120);
    ctx.fillText('30°', 0, 245);
    ctx.fillText('20°', 0, 370);
    ctx.fillText('10°', 0, 495);
    ctx.fillText('0°', 0, 620);

    ctx.moveTo(160, 0);
    ctx.lineTo(160, 625);
    ctx.stroke();

    ctx.moveTo(320, 0);
    ctx.lineTo(320, 625);
    ctx.stroke();

    ctx.moveTo(480, 0);
    ctx.lineTo(480, 625);
    ctx.stroke();

    ctx.moveTo(640, 0);
    ctx.lineTo(640, 625);
    ctx.stroke();

    var current = 1;

    for (var i = 0; i < respArr.length; i++) {

        var dateTxt = new Date(respArr[i].dt_txt);
        var plotSegment = (current * 160) - 160;

        // One day = 160 (space of x) 
        // 8 time points a day (160 / 8 = 20)


        if (i == 0) {
            dateTxt.toDateString();
            ctx.fillText(dateTxt.toDateString(), 5, 30);
            ctx.beginPath();
        }

        if (dateTxt.getHours() == 0) {
            var plotX = plotSegment + 0;
            var plotY = 625 - (respArr[i].main.temp * 12.5)        
            ctx.fillText(dateTxt.toDateString(), plotSegment + 5, 30);
            ctx.arc(plotX, plotY, 3, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 3) {
            var plotX = plotSegment + 20;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 3, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 6) {
            var plotX = plotSegment + 40;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 3, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 9) {
            var plotX = plotSegment + 60;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 3, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 12) {
            var plotX = plotSegment + 80;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 3, 0, 2 * Math.PI);
            ctx.stroke();

        }

        if (dateTxt.getHours() == 15) {
            var plotX = plotSegment + 100;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 3, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 18) {
            var plotX = plotSegment + 120;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 3, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 21) {
            var plotX = plotSegment + 140;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 3, 0, 2 * Math.PI);
            ctx.stroke();   
            current++;
        }
    }
}

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
            var imgURI = "http://openweathermap.org/img/wn/" + respArr[i].weather[0].icon + "@2x.png"
            $("#d" + current + "day").text(dateTxt.toDateString());
            $("#d" + current + "0").text(respArr[i].main.temp);
            $("#d" + current + "0img").empty().append("<img src=\"" + imgURI + "\" style=\"width: 75px\" />");
        }

        if (dateTxt.getHours() == 3) {
            var imgURI = "http://openweathermap.org/img/wn/" + respArr[i].weather[0].icon + "@2x.png"
            $("#d" + current + "3").text(respArr[i].main.temp);
            $("#d" + current + "3img").empty().append("<img src=\"" + imgURI + "\" style=\"width: 75px\" />");
        }

        if (dateTxt.getHours() == 6) {
            var imgURI = "http://openweathermap.org/img/wn/" + respArr[i].weather[0].icon + "@2x.png"
            $("#d" + current + "6").text(respArr[i].main.temp);
            $("#d" + current + "6img").empty().append("<img src=\"" + imgURI + "\" style=\"width: 75px\" />");
        }

        if (dateTxt.getHours() == 9) {
            var imgURI = "http://openweathermap.org/img/wn/" + respArr[i].weather[0].icon + "@2x.png"
            $("#d" + current + "9").text(respArr[i].main.temp);
            $("#d" + current + "9img").empty().append("<img src=\"" + imgURI + "\" style=\"width: 75px\" />");
        }

        if (dateTxt.getHours() == 12) {
            var imgURI = "http://openweathermap.org/img/wn/" + respArr[i].weather[0].icon + "@2x.png"
            $("#d" + current + "12").text(respArr[i].main.temp);
            $("#d" + current + "12img").empty().append("<img src=\"" + imgURI + "\" style=\"width: 75px\" />");
        }

        if (dateTxt.getHours() == 15) {
            var imgURI = "http://openweathermap.org/img/wn/" + respArr[i].weather[0].icon + "@2x.png"
            $("#d" + current + "15").text(respArr[i].main.temp);
            $("#d" + current + "15img").empty().append("<img src=\"" + imgURI + "\" style=\"width: 75px\" />");

        }

        if (dateTxt.getHours() == 18) {
            var imgURI = "http://openweathermap.org/img/wn/" + respArr[i].weather[0].icon + "@2x.png"
            $("#d" + current + "18").text(respArr[i].main.temp);
            $("#d" + current + "18img").empty().append("<img src=\"" + imgURI + "\" style=\"width: 75px\" />");
            console.log(imgURI);
        }

        if (dateTxt.getHours() == 21) {
            var imgURI = "http://openweathermap.org/img/wn/" + respArr[i].weather[0].icon + "@2x.png"
            $("#d" + current + "21").text(respArr[i].main.temp);
            $("#d" + current + "21img").empty().append("<img src=\"" + imgURI + "\" style=\"width: 75px;\" />");
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
        plotChart(res.list);
    }).fail(function (response) {
        console.log("Weather Error" + response);
        alert("Error filling table!");
    });
});


