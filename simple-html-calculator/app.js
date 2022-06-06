const add = (num1, num2) => num1 + num2; 
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;

const addForm = document.add; 
const subtractForm = document.subtract; 
const multiplyForm = document.multiply; 

addForm.addEventListener("submit", event => {
    event.preventDefault();
    let num1 = parseInt(addForm.num1.value);
    let num2 = parseInt(addForm.num2.value);
    const addResult = add(num1, num2);
    addForm.num1.value = "";
    addForm.num2.value = "";
    const span = document.createElement("span");
    span.textContent = ` Result: ${addResult}`; 
    addForm.append(span);
})

subtractForm.addEventListener("submit", event => {
    event.preventDefault();
    let num1 = parseInt(subtractForm.num1.value);
    let num2 = parseInt(subtractForm.num2.value);
    const subtractResult = subtract(num1, num2);
    subtractForm.num1.value = "";
    subtractForm.num2.value = "";
    const span = document.createElement("span");
    span.textContent = ` Result: ${subtractResult}`; 
    subtractForm.append(span);
})

multiplyForm.addEventListener("submit", event => {
    event.preventDefault();
    let num1 = parseInt(multiplyForm.num1.value);
    let num2 = parseInt(multiplyForm.num2.value);
    const multiplyResult = multiply(num1, num2);
    multiplyForm.num1.value = "";
    multiplyForm.num2.value = "";
    const span = document.createElement("span");
    span.textContent = ` Result: ${multiplyResult}`; 
    multiplyForm.append(span);
})