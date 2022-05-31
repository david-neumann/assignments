// Write a function that takes an array of numbers and returns the largest.

const largest = (...numsArr) => {
    let largestNum = 0; 
    for (let i = 0; i < numsArr.length; i++) {
        if (numsArr[i] > largestNum) {
            largestNum = numsArr[i];
        }
    }
    return largestNum
}

console.log(largest(130, 4, 7, 120, 200, 21));


// Write a function that takes an array of words and a character and returns each word that has that character present

const characterIndex = (character, [...wordArr]) => {
    let wordsWithCharacter = [];
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].indexOf(character) > 0) {
            wordsWithCharacter.push(wordArr[i]);
        }
    }
    return wordsWithCharacter; 
} 

console.log(characterIndex("!", ["Hey!", "Wow", "Yowza!", "Whoa"]))

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2

const isDivisible = (num1, num2) => {
    if (num1 % num2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isDivisible(7, 2))