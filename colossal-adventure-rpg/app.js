const readlineSync = require('readline-sync');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName}, welcome to the Colossal Adventure RPG!`)

let hp = 100;
let inventory = [];
let enemyPresent;
let enemies = [
    {
        name: "Lord Voldemort",
        health: Math.floor(Math.random() * 100),
        specialItem: "Elder Wand"
    },
    {
        name: "Draco Malfoy",
        health: Math.floor(Math.random() * 100),
        specialItem: "Firebolt broomstick"
    },
    {
        name: "Dolores Umbridge",
        health: Math.floor(Math.random() * 100),
        specialItem: "Salazar Slytherin's locket"
    },
    {
        name: "Dementor",
        health: Math.floor(Math.random() * 100),
        specialItem: "Stag patronus"
    }
];


const printDetails = () => {
    console.log(`Hi ${userName}. Your current HP is: ${hp}. You have the following items in your inventory: ${inventory}`);
}

const doesEnemyAppear = () => {
    let enemyAppears = Math.floor(Math.random() * 4);
    if (enemyAppears === 0) {
        return enemyPresent = true;
    } else {
        return enemyPresent = false;
    }
}

const chooseEnemy = () => {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)].name;
    return enemy;
}

const walk = () => {
    doesEnemyAppear();
    if (doesEnemyAppear === true) {
        chooseEnemy();
    } else {
        
    }
}

const fight = () => {
    
}

const playGame = () => {
    let userSelect = console.log(readlineSync.keyIn("What would you like to do? Press (w) to walk or (p) to print your current HP and inventory.", {limit: 'wp'}));
    if (userSelect === "w") {
        
    } else if (userSelect === "p") {
        printDetails();
    }
}

// while (hp > 0) {
//     playGame();
// }