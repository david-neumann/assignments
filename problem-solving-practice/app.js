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


// Write a function that takes an array of words and a character and returns each word that has that character present.



// Write a function that takes an array of words and a character and returns each word that has that character present.