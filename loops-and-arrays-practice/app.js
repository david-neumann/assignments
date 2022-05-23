// #1

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        console.count(officeItems[i])
    }
}

// #2

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
]

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough to see Mad Max.`);
    } else {
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see Mad Max.`);
    }
}


// Bonus challenge

const numbers = [6, 4, 8, 12, 3, 25, 49];
let sum = 0; 

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

if (sum % 2 !== 0) {
    console.log("The light is on");
} else if (sum % 2 === 0) {
    console.log("The light is off");
}

console.log(sum);