const form = document["airline-form"];
const submit = document.getElementById("submit");

submit.addEventListener("click", event => {
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