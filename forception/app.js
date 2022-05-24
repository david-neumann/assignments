var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

let newArray = []; // new array to push final output to

let forception = () => {
    // loop through people array first and push names to new array one at a time
    for (let i = 0; i < people.length; i++) {
        newArray.push(people[i]); 
        // between each name, loop through alphabet and push each letter to array
        for (let j = 0; j < alphabet.length; j++) {
            newArray.push(alphabet[j].toUpperCase())
        }
    } return newArray
}

console.log(forception());
