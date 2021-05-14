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

        let i = setInterval (function setClock () {
            let playoffs = "May 17, 2021 19:00:00";
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
                headline.innerText = "Countdown to 2022 NHL Playoffs!";

                nextPlayoffs = "April 15, 2022 19:00:00";
                nextYear = new Date(nextPlayoffs);
                moment;
                timeLeft = nextYear - moment;
                
                days.innerText = Math.floor(
                    (timeLeft / oneDay),
                hours.innerText = Math.floor(
                    (timeLeft % oneDay) / oneHour),
                minutes.innerText = Math.floor(
                    (timeLeft % oneHour) / oneMinute),
                seconds.innerText = Math.floor(
                    (timeLeft % oneMinute) / oneSecond));
            }
        }, 1000)
})();