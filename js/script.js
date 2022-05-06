const timer = document.getElementById("timer");
const start_btn = document.getElementById("start_btn");
const stop_btn = document.getElementById("stop_btn");
const reset_btn = document.getElementById("reset_btn");

let seconds = 1;
let minutes = 0;
let endTimer = false;
    
function startf() {
    if (endTimer === false) {
        setTimeout(function() {
            if (seconds < 10) {
                console.log(seconds);
                timer.innerHTML = `${minutes}:0${seconds}`;
                seconds++;
                startf();
            } else if (seconds >= 10 && seconds < 60) {
                timer.innerHTML = `${minutes}:${seconds}`;
                seconds++;
                startf();
            } else if (seconds >= 60) {
                minutes++;
                seconds = 1;
                timer.innerHTML = `${minutes}:${seconds}`;
                startf();
            } 
        }, 1000)
    } else {
        stopf();
    }
}

function stopf() {
    endTimer = true;
    if (seconds < 10) {
        timer.innerHTML = `${minutes}:0${seconds}`;
    } else {
        timer.innerHTML = `${minutes}:${seconds}`;
    }
}

function resetf() {
    endTimer = false;
    seconds = 1;
    minutes = 0;
    timer.innerHTML = "0:00";
}

start_btn.addEventListener("click", startf);
stop_btn.addEventListener("click", stopf);
reset_btn.addEventListener("click", resetf);