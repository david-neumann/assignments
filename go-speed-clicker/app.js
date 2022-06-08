const counter = document.getElementById("counter");
const clickBtn = document.getElementById("click");
const timer = document.getElementById("timer"); 
const startBtn = document.getElementById("start"); 

let clickCount = 0; 
counter.textContent = clickCount; 

let timeRemaining = 10; 
timer.textContent = `Time remaining: ${timeRemaining}`

let timerId; 
let clickId; 

const incrementCount = () => {
    clickCount++; 
    counter.textContent = clickCount; 
}

const decrementTimer = () => {
    timeRemaining--
    timer.textContent = `Time remaining: ${timeRemaining}`
    if (timeRemaining === 0) {
        clearInterval(timerId); 
        clickBtn.removeEventListener("click", incrementCount); 
        localStorage.setItem("click count", clickCount);
    }
}

startBtn.addEventListener("click", () => {
    timerId = setInterval(decrementTimer, 1000);
})

clickBtn.addEventListener("click", incrementCount)

window.onload = (event) => {
    clickCount = localStorage.getItem("click count");
    counter.textContent = clickCount;
}