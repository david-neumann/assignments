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
    })
})
