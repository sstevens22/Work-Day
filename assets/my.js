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

function eightAM() {
    var input_textarea = document.querySelector("#text8");
    var output_div = document.querySelector("#text8");
    var save_button = document.querySelector("#save8");

    save_button.addEventListener("click", saveOutput);

    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");

    function saveOutput() {
        localStorage.setItem("content", input_textarea.value);
        output_div.textContent = input_textarea.value;
    }

}
function nineAM() {
    var input_textarea2 = document.querySelector("#text9");
    var output_div2 = document.querySelector("#text9");
    var save_button2 = document.querySelector("#save9");

    save_button2.addEventListener("click", saveOutput2);

    output_div2.textContent = localStorage.getItem("content2");
    input_textarea2.value = localStorage.getItem("content2");

    function saveOutput2() {
        localStorage.setItem("content2", input_textarea2.value);
        output_div2.textContent = input_textarea2.value;
    }

}

function tenAM() {
    var input_textarea3 = document.querySelector("#text10");
    var output_div3 = document.querySelector("#text10");
    var save_button3 = document.querySelector("#save10");

    save_button3.addEventListener("click", saveOutput3);

    output_div3.textContent = localStorage.getItem("content3");
    input_textarea3.value = localStorage.getItem("content3");

    function saveOutput3() {
        localStorage.setItem("content3", input_textarea3.value);
        output_div3.textContent = input_textarea3.value;
    }

}

function elevenAM() {
    var input_textarea4 = document.querySelector("#text11");
    var output_div4 = document.querySelector("#text11");
    var save_button4 = document.querySelector("#save11");

    save_button4.addEventListener("click", saveOutput4);

    output_div4.textContent = localStorage.getItem("content4");
    input_textarea4.value = localStorage.getItem("content4");

    function saveOutput4() {
        localStorage.setItem("content4", input_textarea4.value);
        output_div4.textContent = input_textarea4.value;
    }

}

function twelvePM() {
    var input_textarea5 = document.querySelector("#text12");
    var output_div5 = document.querySelector("#text12");
    var save_button5 = document.querySelector("#save12");

    save_button5.addEventListener("click", saveOutput5);

    output_div5.textContent = localStorage.getItem("content5");
    input_textarea5.value = localStorage.getItem("content5");

    function saveOutput5() {
        localStorage.setItem("content5", input_textarea5.value);
        output_div5.textContent = input_textarea5.value;
    }

}

function onePM() {
    var input_textarea6 = document.querySelector("#text1");
    var output_div6 = document.querySelector("#text1");
    var save_button6 = document.querySelector("#save1");

    save_button6.addEventListener("click", saveOutput6);

    output_div6.textContent = localStorage.getItem("content6");
    input_textarea6.value = localStorage.getItem("content6");

    function saveOutput6() {
        localStorage.setItem("content6", input_textarea6.value);
        output_div6.textContent = input_textarea6.value;
    }

}

function twoPM() {
    var input_textarea7 = document.querySelector("#text2");
    var output_div7 = document.querySelector("#text2");
    var save_button7 = document.querySelector("#save2");

    save_button7.addEventListener("click", saveOutput7);

    output_div7.textContent = localStorage.getItem("content7");
    input_textarea7.value = localStorage.getItem("content7");

    function saveOutput7() {
        localStorage.setItem("content7", input_textarea7.value);
        output_div7.textContent = input_textarea7.value;
    }

}

function threePM() {
    var input_textarea8 = document.querySelector("#text3");
    var output_div8 = document.querySelector("#text3");
    var save_button8 = document.querySelector("#save3");

    save_button8.addEventListener("click", saveOutput8);

    output_div8.textContent = localStorage.getItem("content8");
    input_textarea8.value = localStorage.getItem("content8");

    function saveOutput8() {
        localStorage.setItem("content8", input_textarea8.value);
        output_div8.textContent = input_textarea8.value;
    }

}

function fourPM() {
    var input_textarea9 = document.querySelector("#text4");
    var output_div9 = document.querySelector("#text4");
    var save_button9 = document.querySelector("#save4");

    save_button9.addEventListener("click", saveOutput9);

    output_div9.textContent = localStorage.getItem("content9");
    input_textarea9.value = localStorage.getItem("content9");

    function saveOutput9() {
        localStorage.setItem("content9", input_textarea9.value);
        output_div9.textContent = input_textarea9.value;
    }

}

function fivePM() {
    var input_textarea10 = document.querySelector("#text5");
    var output_div10 = document.querySelector("#text5");
    var save_button10 = document.querySelector("#save5");

    save_button10.addEventListener("click", saveOutput10);

    output_div10.textContent = localStorage.getItem("content10");
    input_textarea10.value = localStorage.getItem("content10");

    function saveOutput10() {
        localStorage.setItem("content10", input_textarea10.value);
        output_div10.textContent = input_textarea10.value;
    }

}

function sixPM() {
    var input_textarea11 = document.querySelector("#text6");
    var output_div11 = document.querySelector("#text6");
    var save_button11 = document.querySelector("#save6");

    save_button11.addEventListener("click", saveOutput11);

    output_div11.textContent = localStorage.getItem("content11");
    input_textarea11.value = localStorage.getItem("content11");

    function saveOutput11() {
        localStorage.setItem("content11", input_textarea11.value);
        output_div11.textContent = input_textarea11.value;
    }

}
