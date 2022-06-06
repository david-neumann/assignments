const form = document.travelForm;

form.addEventListener("submit", event => {
    event.preventDefault();

    // Capture form values
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;
    const genderIdentity = form.genderIdentity.value; 
    const destination = form.destination.value;
    const dietRestrictions = [];
    for (let i = 0; i < form.dietRestrictions.length; i++) {
        if (form.dietRestrictions[i].checked) {
            dietRestrictions.push(form.dietRestrictions[i].value);
        }
    }
    
    //Clear form values for user
    form.firstName.value = "";
    form.lastName.value = "";
    form.age.value = "";

    //Show alert with user inputed values
    alert(`First name: ${firstName} \nLast name: ${lastName} \nAge: ${age} \nGender Identity: ${genderIdentity} \nDestination: ${destination} \nDietary Restrictions: ${dietRestrictions}`)
})