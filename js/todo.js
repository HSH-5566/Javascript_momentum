const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = 'toDos';

let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDo();
}

function paintToDo(newToDoObj){
    const li = document.createElement('li');
    li.id = newToDoObj.id;
    
    const span = document.createElement('span');
    span.innerText = newToDoObj.text;
    
    const button = document.createElement('button');
    button.innerText = "❌";
    button.addEventListener('click', deleteToDo);
    
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    paintToDo(newToDoObj);
    toDos = [...toDos, newToDoObj];
    saveToDo();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const todos = JSON.parse(savedToDos);
    todos.forEach((todo) => paintToDo(todo));
    toDos = [...todos];
}