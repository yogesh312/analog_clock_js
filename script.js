const HOURHAND = document.querySelector("#hour"); // dom for hour hand
const MINUTEHAND = document.querySelector("#minute");//dont relation to minute hand
const SECONDHAND = document.querySelector("#second");  //dont relation to minute hand

var date = new Date();  //geting date data from system 
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec); //positioning

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {                                  // running clock as the clock time increasing 

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000); // repeating it for the second by using setInterval
