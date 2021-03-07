// Variables

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

var now = new Date().getHours();

// Start up

window.onload = function(){
    colorCode();
    eightAM();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
    sixPM();
}

function colorCode(){
    if (now > 8) {
        $("#text8").addClass("past");
    } else if (now >= 8 && now < 9) {
        $("#text8").addClass("present");
    } else if (now < 8) {
        $("#text8").addClass("future");
    }
}