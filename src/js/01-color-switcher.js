function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const buttStart = document.querySelector("[data-start]")
const buttStop = document.querySelector("[data-stop]")
const body = document.querySelector("body")
let interval;
buttStop.setAttribute("disabled", "disabled")

function changeColor(){
    body.style.backgroundColor = getRandomHexColor();
}

buttStart.onclick = () => {
    interval = setInterval(changeColor, 1000);
    buttStart.setAttribute("disabled", "disabled");
    buttStop.removeAttribute("disabled", "disabled");
}
buttStop.onclick = () => {
    clearInterval(interval);
    buttStart.removeAttribute("disabled", "disabled");
    buttStop.setAttribute("disabled", "disabled");
}