// 1 - Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

let exampleString = "The quick brown fox jumped over the lazy dog";

let capitalizeAndLowercase = () => {
    let capitalString = exampleString.toUpperCase();
    let lowercaseString = exampleString.toLowerCase(); 
    let newString = capitalString.concat(lowercaseString);
    return newString; 
}

console.log(capitalizeAndLowercase(exampleString));


