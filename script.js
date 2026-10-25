let heading = document.querySelector(".time");

let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#stop");
let btnreset = document.querySelector("#reset");

btnStart.addEventListener("click", () => {
    start();
});

let isStop = true;
let sec = 0;
let min = 0;
let hr = 0;

function start() {
 console.log("start-click");
 
    if (isStop == true) {
        isStop = false;
       timer();
    }
}

function timer(){
  if(isStop==false){
    sec++;
     if (sec == 60) {
            sec = 0;
            min++;
        }

        if (min == 60) {
            min = 0;
            hr++;
        }

        heading.innerText =
            String(hr).padStart(2, "0") + ":" +
            String(min).padStart(2, "0") + ":" +
            String(sec).padStart(2, "0");
    setTimeout(timer,1000);
  }
}

btnStop.addEventListener("click", () => {
    stop();
});
function stop() {
    console.log("stop-click");
    isStop=true;
}

btnreset.addEventListener("click", () => {
    reset();
});
function reset() {
    console.log("reset-click");
    sec=0;
    min=0;
    hr=0;
    heading.innerText="HH:MM:SS";
}
