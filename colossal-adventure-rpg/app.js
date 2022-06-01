const readlineSync = require('readline-sync');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName}, welcome to the Colossal Adventure RPG!`)

let hp = 100;
let inventory = [];
let enemyPresent;
let currentEnemy;
let enemies = [
    {
        name: "Lord Voldemort",
        specialItem: "Elder Wand"
    },
    {
        name: "Draco Malfoy",
        specialItem: "Firebolt broomstick"
    },
    {
        name: "Dolores Umbridge",
        specialItem: "Salazar Slytherin's locket"
    },
    {
        name: "Dementor",
        specialItem: "Stag patronus"
    }
];


const printDetails = () => {
    console.log(`Hi ${userName}. Your current HP is: ${hp}. You have the following items in your inventory: ${inventory}`);
}

const walk = () => {
    doesEnemyAppear();
    if (enemyPresent === true) {
        currentEnemy = enemies[Math.floor(Math.random() * enemies.length)].name;
        console.log(`You've been attacked by ${currentEnemy}!`);
        let userSelect = readlineSync.keyIn("What would you like to do? Press (a) to attack or (r) to run. ", {limit: 'ar'});
        if (userSelect === "a") {
            attack();
        } else if (userSelect === "r") {
            run();
        }
    } else {
        console.log("No enemies found yet. Keep walking.")
    }
}

const doesEnemyAppear = () => {
    let enemyAppears = Math.floor(Math.random() * 3);
    if (enemyAppears === 0) {
        return enemyPresent = true;
    } else {
        return enemyPresent = false;
    }
}

const attack = () => {
    console.log("You've chosen to attack!");
    let damageAmount = Math.floor(Math.random() * 100);
    let enemyHealth = Math.floor(Math.random() * 100);
    enemyHealth -= damageAmount; 
    if (enemyHealth > 0) {
        console.log(`Your attack dealt a blow of ${damageAmount}. ${currentEnemy} has ${enemyHealth} HP remaining.`);
        let enemyDamageAmount = Math.floor(Math.random() * 100);
        hp -= enemyDamageAmount; 
        console.log(`Your HP is: ${hp}`);
    } else if (enemyHealth <= 0) {
        console.log(`WICKED ATTACK, you've killed ${currentEnemy}!!!`)
        for (let i = 0; i < enemies.length; i++) {
            if (currentEnemy === enemies[i].name) {
                inventory.push(enemies[i].specialItem);
                console.log(`As a reward for killing ${currentEnemy}, you've added ${enemies[i].specialItem} to your inventory.`); 
                enemies.splice(i, 1); 
                console.log(enemies);
            }
        }
    }
}

const run = () => {
    console.log("Oh no, RUUUUUUNNNNNN!!!!");
}

const playGame = () => {
    let userSelect = readlineSync.keyIn("What would you like to do? Press (w) to walk or (p) to print your current HP and inventory. ", {limit: 'wp'});
    if (userSelect === "w") {
        walk();
    } else if (userSelect === "p") {
        printDetails();
    }
}

while (hp > 0) {
    playGame();
}