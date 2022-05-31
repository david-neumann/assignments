const form = document["airline-form"];
const submit = document.getElementByID("submit");
// const query = document.querySelector;


form.addEventListener("submit", event => {
    event.preventDefault();
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const location = form.travelLocation.value;
    const diet = [];
    for (let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            diet.push(form.diet[i].value);
        }
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})

// function formAlert () {
    
//     const diet = () => {
//         if (form.elements['vegan'].checked) {
//             var diet.pop(document.getElementById("vegan").value);
//         }
//         if (form.elements['gluten'].checked) {
//             diet.push(document.getElementById("gluten").value);
//         }
//         if (form.elements['paleo'].checked) {
//             diet.push(document.getElementById("paleo").value);
//         }
//     }
    


    
// }


