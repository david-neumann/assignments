var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1

vegetables.pop();

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// 2

fruit.shift(); 

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// 3

let orangeIndex = fruit.indexOf("orange");
// console.log(orangeIndex)

// 4

fruit.push(orangeIndex);

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// 5

let vegetablesLength = vegetables.length;
// console.log(vegetablesLength);

// 6

vegetables.push(vegetablesLength);

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// 7

let food = fruit.concat(vegetables);

// console.log(food);

// 8

food.splice(4, 2);

// console.log(food);

// 9 

food.reverse()

// console.log(food);

// 10

let foodString = food.join(",")

console.log(foodString);