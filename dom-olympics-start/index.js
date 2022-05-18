// Create header

const h1 = document.createElement("h1");
h1.textContent = "JavaScript made this!!";
document.querySelector("#header").appendChild(h1);
h1.className = "header";

// Create sub-header

const subTitle = document.createElement("h3");
subTitle.innerHTML = "<span class='name'>David</span> wrote the JavaScript";
document.querySelector("#header").appendChild(subTitle);
subTitle.style.textAlign = "center";

// Bronze

const messages = document.getElementsByClassName("message");

messages[0].textContent = "I will not give my life for Joffrey's murder.";
messages[1].textContent =
  "And I know I'll get no justice here, so I will let the gods decide my fate.";
messages[2].textContent = "I demand a trial by combat!";
messages[3].textContent = ":SHOCKEDFACE:";

function clearButtonClick() {
  for (i = 0; i < messages.length; i++) {
    messages[i].textContent = "";
    messages[i].style.backgroundColor = "white";
  }
}

let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearButtonClick);

// Silver

const dropDown = document.getElementById("theme-drop-down");
const leftMessage = document.querySelectorAll(".left");
const rightMessage = document.querySelectorAll(".right");

function themeChange() {
    if (dropDown.value === "theme-one") {
      rightMessage.forEach(function(node) {
        node.style.backgroundColor = "lightblue";
        });
      leftMessage.forEach(function(node) {
        node.style.backgroundColor = "burlywood";
        node.style.color = "black";
        });
    } else if (dropDown.value === "theme-two") {
      rightMessage.forEach(function(node) {
        node.style.backgroundColor = "red";
        });
      leftMessage.forEach(function(node) {
        node.style.backgroundColor = "black";
        node.style.color = "white";
        });
    }   
}

dropDown.addEventListener("change", themeChange, false);


// Gold

const div = document.createElement("div");
const textBox = document.getElementById("input").value;
const button = document.getElementById("send-button");

function sendMessage(event) {
  const messageList = document.getElementById("message-list");
  div.textContent = textBox;
  div.className = "message left";
  messageList.appendChild(div);
  themeChange();
  event.preventDefault();
}

button.addEventListener("click", sendMessage);

