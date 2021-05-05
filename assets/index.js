// Countdown Module

(function countdown () {
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    let i = setInterval (function () {
        let playoffs = "May 25, 2021 19:00:00";
        let countdown = new Date(playoffs).getTime();
        let moment = new Date().getTime();
        let timeLeft = countdown - moment;
 
        days.innerText = Math.floor(
            (timeLeft / oneDay)),
        hours.innerText = Math.floor(
            (timeLeft % oneDay) / oneHour),
        minutes.innerText = Math.floor(
            (timeLeft % oneHour) / oneMinute),
        seconds.innerText = Math.floor(
            (timeLeft % oneMinute) / oneSecond);
 
        // Reset to 2022 playoffs date when countdown reaches 0
        if (timeLeft < 0) {
            clearInterval(i);
            let headline = document.getElementById("headline");
            headline.innerText = "Countdown to NHL 2022 Playoffs!";

            playoffs = "April 15, 2022 19:00:00";
            countdown = new Date(playoffs).getTime();
            timeLeft = countdown - moment;
            
            days.insertBefore = Math.floor(
                (timeLeft / oneDay)),
            hours.innerText = Math.floor(
                (timeLeft % oneDay) / oneHour),
            minutes.innerText = Math.floor(
                (timeLeft % oneHour) / oneMinute),
            seconds.innerText = Math.floor(
                (timeLeft % oneMinute) / oneSecond);
        }
    }, 0);
})();