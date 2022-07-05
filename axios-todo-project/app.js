// Get existing to-dos from the database

const getTodos = () => axios.get("https://api.vschool.io/davidneumann/todo").then(res => listTodos(res.data)).catch(err => console.log(err));

getTodos();

// Add to-dos to the DOM

const listTodos = (todos) => {
    clearList();
    for (let todo of todos) {
        const li = document.createElement('li'); 
        const editBtn = document.createElement('span');
        const deleteBtn = document.createElement('span');
        const desc = document.createElement('p');
        const price = document.createElement('p');

        li.textContent = todo.title; 
        editBtn.textContent = 'edit';
        deleteBtn.textContent = 'delete';

        editBtn.className = 'material-symbols-outlined';
        deleteBtn.className = 'material-symbols-outlined';
        desc.id = `desc${todos.indexOf(todo)}`
        price.id = `price${todos.indexOf(todo)}`
        if (todo.completed) {
            li.className = 'completedTodo';
        } else {
            li.id = `todo${todos.indexOf(todo)}`
        }
        if (todo.description) {
            desc.textContent = todo.description; 
        }
        if (todo.price) {
            price.textContent = `Price: $${todo.price}`
        }
        
        document.getElementById('listItems').appendChild(li);
        li.appendChild(editBtn); 
        li.appendChild(deleteBtn); 
        li.appendChild(desc);
        li.appendChild(price);

        editBtn.addEventListener('click', () => {
            const priceBtn = document.createElement('button');
            const descBtn = document.createElement('button'); 
            const priceSpan = document.createElement('span');
            const descSpan = document.createElement('span');

            priceBtn.textContent = 'Price';
            descBtn.textContent = 'Description';
            priceSpan.textContent = 'payments';
            descSpan.textContent = 'description';

            priceBtn.id = 'priceBtn';
            descBtn.id = 'descBtn';
            priceSpan.className = 'material-symbols-outlined';
            descSpan.className = 'material-symbols-outlined'; 

            descBtn.append(descSpan);
            priceBtn.append(priceSpan);

            const editDiv = document.createElement('div');
            editDiv.className = 'editContent';
            document.getElementById(`todo${todos.indexOf(todo)}`).appendChild(editDiv);
            editDiv.append(descBtn, priceBtn);

            descBtn.addEventListener('click', editDesc);
            priceBtn.addEventListener('click', editPrice);
        });
        deleteBtn.addEventListener('click', () => {
            axios.delete(`https://api.vschool.io/davidneumann/todo/${todo._id}`)
                .then(res => console.log(res.data))
            
            document.getElementById('listItems').removeChild(deleteBtn.parentNode)
        });
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


// Edit price 

const editPrice = () => {
    const priceBtn = document.getElementById('priceBtn'); 
    
    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    
    priceBtn.parentNode.prepend(priceInput);
    priceBtn.parentNode.removeChild(priceBtn);
    
    axios.get("https://api.vschool.io/davidneumann/todo")
        .then(res => {
            let todoId; 
            for (let obj of res.data) {
                if (priceInput.parentNode.parentNode.textContent.includes(obj.title)) {
                    todoId = obj._id;
                    priceInput.placeholder = obj.price;
                }
            }   

            priceInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    const priceValue = {
                        price: priceInput.value
                    }
                    axios.put(`https://api.vschool.io/davidneumann/todo/${todoId}`, priceValue);

                    for (let obj of res.data) {
                        if (priceInput.parentNode.parentNode.textContent.includes(obj.title)) {
                            let index = res.data.indexOf(obj);
                            const price = document.getElementById(`price${index}`);
                            price.textContent = `Price: $${priceInput.value}`
                        }
                    }
                    priceInput.parentNode.prepend(priceBtn);
                    priceInput.parentNode.removeChild(priceInput);
                    const editDiv = document.querySelector('.editContent')
                    editDiv.parentNode.removeChild(editDiv);
                }
            })
        })
}


// Edit description

const editDesc = () => {
    const descBtn = document.getElementById('descBtn'); 
    const descInput = document.createElement('input');

    descBtn.parentNode.appendChild(descInput);
    descBtn.parentNode.removeChild(descBtn);

    axios.get("https://api.vschool.io/davidneumann/todo")
        .then(res => {
            let todoId; 
            for (let obj of res.data) {
                if (descInput.parentNode.parentNode.textContent.includes(obj.title)) {
                    todoId = obj._id;
                    descInput.placeholder = obj.description;
                }
            }

            descInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    const descValue = {
                        description: descInput.value
                    }
                    axios.put(`https://api.vschool.io/davidneumann/todo/${todoId}`, descValue);

                    for (let obj of res.data) {
                        if (descInput.parentNode.parentNode.textContent.includes(obj.title)) {
                            let index = res.data.indexOf(obj);
                            const desc = document.getElementById(`desc${index}`);
                            desc.textContent = `${descInput.value}`
                        }
                    }
                    descInput.parentNode.prepend(descBtn);
                    descInput.parentNode.removeChild(descInput);
                    const editDiv = document.querySelector('.editContent')
                    editDiv.parentNode.removeChild(editDiv);
                }
            })
        })
}