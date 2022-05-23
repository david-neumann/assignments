const readlineSync = require('readline-sync');

const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const operations = ["add", "sub", "mul", "div"]; 

let num1 = readlineSync.questionInt("Please enter your first number: ");
let num2 = readlineSync.questionInt("Please enter your second number: ");
let operation = readlineSync.keyInSelect(operations, "Please enter the operation to perform: ");

let answer = () => {
    if (operation === 0) {
        return add(num1, num2);
    } else if (operation === 1) {
        return sub(num1, num2);
    } else if (operation === 2) {
        return mul(num1, num2);
    } else if (operation === 3) {
        return div(num1, num2);
    }
}

console.log("The result is: " + answer());