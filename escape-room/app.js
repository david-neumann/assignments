const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(`Hi ${name}, welcome to the Escape Room!! You have one objective: Get out alive! Familiarize yourself with the room. There's only one door, and you must find the key in order to open it. And what is that strange hole to your left? Good luck!`);

const userChoices = ["Put hand in hole", "Find the key", "Open the door"];
let keyFound = false;
let escaped = false;
let isAlive = true;   
let gameOver = () => {
    if (true) {
        isAlive = false; 
        console.log(`Oh no! You put your hand into the Hole of Death! GAME OVER`)
    }
}

let playGame = () => {
    let userDecision = readline.keyInSelect(userChoices, "What would you like to do?")
    if (userDecision === 0) {
        gameOver(true);
    } else if (userDecision === 1) {
        let keyDecision = Math.floor(Math.random() * 2);
        if (keyDecision === 0) {
            console.log("You didn't find the key. Keep searching.")
        } else if (keyDecision === 1) {
            keyFound = true; 
            console.log("You found the key! Quick, get to the door!")
        }
    } else if (userDecision === 2) {
        if (keyFound === false) {
            console.log("Nice try, but you need to find the key first.")
        } else if (keyFound === true) {
            escaped = true; 
            console.log(`Congratulations, ${name}! You've escaped!`)
        }
    } 
}

while (escaped === false && isAlive === true) {
    playGame();
}