// Countdown timer
var timerId = countdown(
    new Date("2019-11-29 18:48"),
    function (ts) {
        if (ts.end > ts.start) {
            document.getElementById('over').innerHTML = "HACKATHON OVER";
            document.getElementById('hours').innerHTML = "";
            document.getElementById('colen-1').innerHTML = "";
            document.getElementById('colen-2').innerHTML = "";
            document.getElementById('minutes').innerHTML = "";
            document.getElementById('seconds').innerHTML = "";
        } else {
            document.getElementById('hours').innerHTML = asTwoDigit(ts.hours);
            document.getElementById('minutes').innerHTML = asTwoDigit(ts.minutes);
            document.getElementById('seconds').innerHTML = asTwoDigit(ts.seconds);
        }
    },
    countdown.HOURS | countdown.MINUTES | countdown.SECONDS
);

function asTwoDigit(number) {
    if (number < 10)
        return "0" + number;
    return "" + number;
}
