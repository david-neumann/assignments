const form = document.addItem; 

form.addEventListener("submit", event => {
    // Add new item to shopping list
    event.preventDefault(); 
    const itemName = form.title.value;
    form.title.value = "";
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.textContent = itemName;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    ul.appendChild(li);
    li.appendChild(div);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Remove item when pressing X button
    deleteButton.addEventListener("click", event => {
        event.target.parentNode.remove();
        sessionStorage.removeItem(event.target.parentNode);
    })

    // Have input box appear when Edit button is clicked
    function editButtonClick(event) {
        const editBox = document.createElement("input");
        editBox.value = event.target.parentNode.childNodes[0].textContent;
        event.target.parentNode.appendChild(editBox);
        // Change Edit button to Save button
        const saveButton = document.createElement("button")
        saveButton.textContent = "Save";
        editButton.replaceWith(saveButton);
        // Update item on save and remove input box
        function saveButtonClick(event) {
            const updatedItem = editBox.value;
            event.target.parentNode.childNodes[0].textContent = updatedItem;
            saveButton.replaceWith(editButton);
            editBox.remove();
        }
        saveButton.addEventListener("click", saveButtonClick);
    }
    editButton.addEventListener("click", editButtonClick);
})