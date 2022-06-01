const readlineSync = require('readline-sync');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName}, welcome to the Colossal Harry Potter RPG!`)

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
        name: "Bellatrix Lestrange",
        specialItem: "Stag patronus"
    }
];

const randomNumber = num1 => Math.floor(Math.random() * num1);

const printDetails = () => {
    console.log(`Hi ${userName}. Your current HP is: ${hp}. You have the following items in your inventory: ${inventory}`);
}

const doesEnemyAppear = () => {
    let enemyAppears = randomNumber(3);
    if (enemyAppears === 0) {
        return enemyPresent = true;
    } else {
        return enemyPresent = false;
    }
}

const attack = () => {
    console.log("You've chosen to attack!");
    let damageAmount = randomNumber(100);
    let enemyHealth = randomNumber(100);
    while (enemyHealth > 0 && hp > 0) {
        enemyHealth -= damageAmount; 
        console.log(`Damage is: ${damageAmount}. Enemy health is: ${enemyHealth}.`);
        if (enemyHealth > 0) {
            console.log(`Your spell dealt a blow of ${damageAmount}. ${currentEnemy} has ${enemyHealth} HP remaining.`);
            let enemyDamageAmount = randomNumber(100);
            hp -= enemyDamageAmount; 
            console.log(`${currentEnemy} released a counterspell, dealing you ${enemyDamageAmount} damage. Your HP is: ${hp}. ${currentEnemy}'s HP is: ${enemyHealth}.`);
        } else if (enemyHealth <= 0) {
            console.log(`UNFORGIVABLE, your spell took out ${currentEnemy}!!!`)
            for (let i = 0; i < enemies.length; i++) {
                if (currentEnemy === enemies[i].name) {
                    inventory.push(enemies[i].specialItem);
                    let hpReward = randomNumber(100-hp);
                    hp += hpReward;
                    console.log(`As a reward for taking out ${currentEnemy}, you've been given a boost of ${hpReward} HP and added ${enemies[i].specialItem} to your inventory.`); 
                    enemies.splice(i, 1); 
                    // console.log(enemies);
                    if (enemies.length === 0) {
                        console.log(`Congratulations, you've elminated all of the Death Eaters!`)
                    } else {
                        console.log(`Stay vigilant, there are still ${enemies.length} Death Eathers lurking.`)
                    }
                }
            }
        }
    }
}

const run = () => {
    console.log("Oh no, RUUUUUUNNNNNN!!!!");
}

const walk = () => {
    doesEnemyAppear();
    if (enemyPresent === true) {
        currentEnemy = enemies[Math.floor(Math.random() * enemies.length)].name;
        console.log(`DEATH EATER! You've been confronted by ${currentEnemy}!`);
        let userSelect = readlineSync.keyIn("What would you like to do? Press (a) to cast an attack spell or (r) to run. ", {limit: 'ar'});
        if (userSelect === "a") {
            attack();
        } else if (userSelect === "r") {
            run();
        }
    } else {
        console.log("No Death Eaters found yet. Keep walking.")
    }
}

const playGame = () => {
    let userSelect = readlineSync.keyIn("What would you like to do? Press (w) to walk or (p) to print your current HP and inventory. ", {limit: 'wp'});
    if (userSelect === "w") {
        walk();
    } else if (userSelect === "p") {
        printDetails();
    }
}

while (hp > 0 || enemies.length !== 0) {
    playGame();
}