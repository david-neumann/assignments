// Green Circle

// 1) Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

const collectAnimals = (...animals) => animals; 

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


// 2) Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

const combineFruit = (fruit, sweets, vegetables) => {
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
/* => {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }
*/



// 3) Use destructuring to use the property names as variables. Destructure the object in the parameter:

const parseSentence = ({location, duration}) => `We're going to have a good time in ${location} for ${duration}`

console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
}));



// 4) Use array destructuring to make this code ES6:

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst(["red", "blue", "green"]))



// 5) Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr; 
    return `My top three favorite activities are: ${firstFav}, ${secondFav}, and ${thirdFav}.`;
}

console.log(returnFavorites(favoriteActivities))



// Blue Square

// 1) Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(...arrays) {
    const [array1, array2, array3] = arrays;
    return [...array1, ...array2, ...array3]; 
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]




// Black Diamond

// 1) Try to make the following function more ES6y:

const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1)

console.log(product(1, 4, 2, 8, 3))

// 2) Make the following function more ES6y. Use at least both the rest and spread operators:

const unshift = (array, ...letters) => [...array, ...letters]

console.log(unshift([1, 2, 3], 'a', 'b', 'c', 'd', 'e'))



// Double Black Diamond

// 1) Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

const populatePeople = names => names.map(name => {
    const fullName = name.split(" ");
    const [firstName, lastName] = fullName;
    return {firstName, lastName}; 
});



// function populatePeople(names){
//     return names.map(function(name){
//         let {firstName, lastName} = name.split(" ");
//         return {
//             firstName,
//             lastName
//         }
//     })
// }

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]