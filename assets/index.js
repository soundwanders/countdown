// Countdown Module

(function countdown (playoffs) {
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

        let i = setInterval (function setClock () {
            let playoffs = "April 15, 2022 19:00:00";
            let countdown = new Date(playoffs).getTime();
            let moment = new Date().getTime();
            let timeLeft = countdown - moment;
    
            days.innerText = Math.floor(
                (timeLeft / oneDay),
            hours.innerText = Math.floor(
                (timeLeft % oneDay) / oneHour),
            minutes.innerText = Math.floor(
                (timeLeft % oneHour) / oneMinute),
            seconds.innerText = Math.floor(
                (timeLeft % oneMinute) / oneSecond));

            if (timeLeft < 0) {
                clearInterval(i);

                let headline = document.getElementById("headline");
                headline.innerText = "Countdown to 2023 NHL Playoffs!";

                playoffs = "April 15, 2023 19:00:00";
                nextYear = new Date(playoffs);
                moment;
                timeLeft = nextYear - moment;
            }
        }, 0)
})();


// reset the body height to that of the inner browser
function resetHeight(){
    document.body.style.height = window.innerHeight + "px";
}
window.addEventListener("resize", resetHeight);
resetHeight();