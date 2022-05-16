// Create header

const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
document.querySelector("#header").appendChild(h1);
h1.className = "header";

// Create sub-header

const subTitle = document.createElement("h3");
subTitle.innerHTML = "<span class='name'>David</span> wrote the JavaScript"; 
document.querySelector("#header").appendChild(subTitle);
subTitle.className = "header";

// Bronze

const messages = document.getElementsByClassName("message");

messages[0].textContent = "I will not give my life for Joffrey's murder."
messages[1].textContent = "And I know I'll get no justice here, so I will let the gods decide my fate."
messages[2].textContent = "I demand a trial by combat!"
messages[3].textContent = "**GASPS**"

function clearButtonClick() {
    for (i = 0; i < messages.length; i++) {
        messages[i].textContent = "";
    }
}

let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearButtonClick);

// Silver

const dropDown = document.getElementById("theme-drop-down");
const rightMessage = document.getElementsByClassName("right");
const leftMessage = document.getElementsByClassName("left");
function dropDownChange() {
    for (i = 0; i < messages.length; i++) {
        messages[i].classList.toggle("theme-two");
    }
}

dropDown.addEventListener("change", dropDownChange);