// 1 - Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

// let exampleString = "The quick brown fox jumped over the lazy dog";

// let capitalizeAndLowercase = () => {
//     let capitalString = exampleString.toUpperCase();
//     let lowercaseString = exampleString.toLowerCase(); 
//     let newString = capitalString.concat(lowercaseString);
//     return newString; 
// }

// console.log(capitalizeAndLowercase(exampleString));


// 2 - Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

let string = "Ow now brown cow"; 

let findMiddleIndex = () => Math.floor(string.length / 2); 

// console.log(findMiddleIndex(string)); 


// 3 - Write a function that uses slice() and the other functions you've written to return the first half of the given string.

let returnFirstHalf = () => string.slice(0, findMiddleIndex(string))

// console.log(returnFirstHalf()); 

// 4 - Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

let returnSecondHalf = () => string.slice(findMiddleIndex(string))

let capitalizeAndLowercase = () => {
    let capitalFirst = returnFirstHalf().toUpperCase();
    let lowerSecond = returnSecondHalf().toLowerCase();
    return capitalFirst.concat(lowerSecond);
}

console.log(capitalizeAndLowercase());