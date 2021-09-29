function plotChart(respArr) {


    // TO-DO Update code to adjust to screen size


    var chart = document.getElementById("myCanvas");
    var ctx = chart.getContext("2d");

    
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
            ctx.arc(plotX, plotY, 5, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 3) {
            var plotX = plotSegment + 20;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 5, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 6) {
            var plotX = plotSegment + 40;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 5, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 9) {
            var plotX = plotSegment + 60;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 5, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 12) {
            var plotX = plotSegment + 80;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 5, 0, 2 * Math.PI);
            ctx.stroke();

        }

        if (dateTxt.getHours() == 15) {
            var plotX = plotSegment + 100;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 5, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 18) {
            var plotX = plotSegment + 120;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 5, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (dateTxt.getHours() == 21) {
            var plotX = plotSegment + 140;
            var plotY = 625 - (respArr[i].main.temp * 12.5);
            ctx.arc(plotX, plotY, 5, 0, 2 * Math.PI);
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
        plotChart(res.list);
    }).fail(function (response) {
        console.log("Weather Error" + response);
        alert("Error filling table!");
    });
   alert(uriWeather);
});
