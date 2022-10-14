document.addEventListener('DOMContentLoaded', function(){
    let input = document.getElementById('todo-input');
    let todoForm = document.getElementById('todo-form');
    let todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createNewTodo();
    });

function createNewTodo() {
    let newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    todoList.appendChild(newTodo);
}

});
