// Get existing to-dos from the database

const getTodos = () => {
    axios.get("https://api.vschool.io/davidneumann/todo")
        .then(res => listTodos(res.data))
        .catch(err => console.log(err))
}

// Add to-dos to the DOM

const listTodos = (todos) => {
    clearList();
    for (let todo of todos) {
        const li = document.createElement('li'); 
        li.textContent = todo.title; 
        document.getElementById('listItems').appendChild(li);
    }
}

// Clear list to avoid showing duplicates

const clearList = () => {
    const list = document.getElementById('listItems'); 
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

// Capturing new to-do items

const form = document.todoList; 
form.addEventListener('submit', event => {
    event.preventDefault(); 
    const newTodo = {
        title: form.newTodo.value
    }; 
    form.newTodo.value = ""; 
    axios.post("https://api.vschool.io/davidneumann/todo", newTodo)
        .then(res => getTodos())
        .catch(err => console.log(err))
})

getTodos()