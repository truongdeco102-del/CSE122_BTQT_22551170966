function updateCount(){
    const totalitems = document.querySelectorAll('#todo-list li').length;
    const completeItems = document.querySelectorAll('#todo-list li.completed').length;
    const remaining = totalitems - completeItems;

    document.getElementById('remaining-count').innerText = `Con ${remaining} Viec chua hoan thanh `;
}

function addTodo(){
    const input = document.getElementById('todo-input');
    const text = input.value.trim();

    if(text ==="") return;

    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');

    li.innerHTML = `
    <span class="checkbox" onclick="toggleTodo(this)"></span>
    <span class="todo-text">${text}</span>
    <button class="delete-btn" onclick="deleteTodo(this)">Xoá</button>
    `;

    ul.appendChild(li);
    input.Value="";
    updateCount();
}

function toggleTodo(element){
    const li = element.parentElement;
    li.classList.toggle('completed');
    updateCount();
}

function deleteTodo(element){
    const li = element.parentElement;
    li.remove();
    updateCount();

}

function deleteText(element){
    const li = element.parentElement;
    li.classList.toggle('completed');
    updateCount();

}

document.getElementById('todo-input').addEventListener('keypress',function(e){
    if(e.key === "Enter"){
        addTodo();
    }
});

updateCount();