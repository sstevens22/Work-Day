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
    if (now > 9) {
        $("#text9").addClass("past");
    } else if (now >= 9 && now < 10) {
        $("#text9").addClass("present");
    } else if (now < 9) {
        $("#text9").addClass("future");
    }
    if (now > 10) {
        $("#text10").addClass("past");
    } else if (now >= 10 && now < 11) {
        $("#text10").addClass("present");
    } else if (now < 10) {
        $("#text10").addClass("future");
    }
    if (now > 11) {
        $("#text11").addClass("past");
    } else if (now >= 11 && now < 12) {
        $("#text11").addClass("present");
    } else if (now < 11) {
        $("#text11").addClass("future");
    }
    if (now > 12) {
        $("#text12").addClass("past");
    } else if (now >= 12 && now < 13) {
        $("#text12").addClass("present");
    } else if (now < 12) {
        $("#text12").addClass("future");
    }
    if (now > 13) {
        $("#text1").addClass("past");
    } else if (now >= 13 && now < 14) {
        $("#text1").addClass("present");
    } else if (now < 13) {
        $("#text1").addClass("future");
    }
    if (now > 14) {
        $("#text2").addClass("past");
    } else if (now >= 14 && now < 15) {
        $("#text2").addClass("present");
    } else if (now < 14) {
        $("#text2").addClass("future");
    }
    if (now > 15) {
        $("#text3").addClass("past");
    } else if (now >= 15 && now < 16) {
        $("#text3").addClass("present");
    } else if (now < 15) {
        $("#text3").addClass("future");
    }
    if (now > 16) {
        $("#text4").addClass("past");
    } else if (now >= 16 && now < 17) {
        $("#text4").addClass("present");
    } else if (now < 16) {
        $("#text4").addClass("future");
    }
    if (now > 17) {
        $("#text5").addClass("past");
    } else if (now >= 17 && now < 18) {
        $("#text5").addClass("present");
    } else if (now < 17) {
        $("#text5").addClass("future");
    }
    if (now > 18) {
        $("#text6").addClass("past");
    } else if (now >= 18 && now < 19) {
        $("#text6").addClass("present");
    } else if (now < 18) {
        $("#text6").addClass("future");
    }
}