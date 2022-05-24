// Preliminaries

// #1 - Write a for loop that prints to the console the numbers 0 through 9.

// for (let i = 0; i <= 9; i++) {
//     console.log(i);
// }

// #2 - Write a for loop that prints to the console 9 through 0.

// for (let i = 9; i >= 0; i--) {
//     console.log(i)
// }

// #3 - Write a for loop that prints these fruits to the console.

// const fruit = ["banana", "orange", "apple", "kiwi"]

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }




// Bronze Medal

// #1 - Write a for loop that will push the numbers 0 through 9 to an array.

// let numArr = [];

// for (let i = 0; i <= 9; i++) {
//     numArr.push(i);
// }

// console.log(numArr);

// #2 - Write a for loop that prints to the console only even numbers 0 through 100.

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

// #3 - Write a for loop that will push every other fruit to an array.

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// let newFruit = [];

// for (let i = 0; i < fruit.length; i += 2) {
//     newFruit.push(fruit[i]);
// }

// console.log(newFruit);




// Silver Medal

// #1 - Write a loop that will print out all the names of the people of the people array

// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
// ]

// for (let i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name);
// }


// #2 - Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.

// let names = [];
// let occupations = [];

// for (let i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation)
// }

// console.log(names);
// console.log(occupations);


// #3 - Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

// for (let i = 0; i < peopleArray.length; i++) {
//     if (i % 2 === 0) {
//         names.push(peopleArray[i].name);
//     } else {
//         occupations.push(peopleArray[i].occupation);
//     }
// }

// console.log(names);
// console.log(occupations);





// Gold Medal

// #1 - Create an array that mimics a grid like the following using nested for loops

// let numberGrid = [
//     [],
//     [],
//     []
// ];

// for (let i = 0; i < numberGrid.length; i++) {
//     for (let j = 0; j < 3; j++) {
//         numberGrid[i].push(0);
//     }
// }

// console.log(numberGrid);


// #2 

// for (let i = 0; i < numberGrid.length; i++) {
//     for (let j = 0; j < 3; j++) {
//         numberGrid[i].push(i);
//     }
// }

// console.log(numberGrid);

// #3

// for (let i = 0; i < numberGrid.length; i++) {
//     for (let j = 0; j < 3; j++) {
//         numberGrid[i].push(j);
//     }
// }

// console.log(numberGrid);

// #4

let numberGrid = [
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
];

for (let i = 0; i < numberGrid.length; i++) {
    for (let j = 0; j < numberGrid[i].length; j++) {
        numberGrid[i].splice(j, 1, "x");
    }
}

console.log(numberGrid);