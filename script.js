let showTime;

function startTimer(duration, display) {
    let timer = duration;
    let minutes;
    let seconds;

    showTime = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(showTime);
        }
    }, 1000);
}

window.onload = function () {
    let tenMinutes = 60 * 10;
    let display = document.querySelector("#time");
    startTimer(tenMinutes, display);
};
