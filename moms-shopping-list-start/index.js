const form = document.addItem; 

form.addEventListener("submit", event => {
    event.preventDefault(); 
    const newItem = form.title.value;
    form.title.value = "";
    const li = document.createElement("li");
    li.innerHTML = `<div>${newItem}</div>
        <button>edit</button>
        <button>X</button>`
    document.getElementById("list").append(li);
})