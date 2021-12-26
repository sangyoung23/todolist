const toDoForm = document.querySelector("#todoForm");
const toDoInput = document.querySelector("#todoinput");
const toDoList = document.querySelector("#todolist");

let toDos = [];

function savedToDos () {
    localStorage.setItem("todos", JSON.stringify(toDos));

}

function deleteToDo (event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    savedToDos();
}

function paintToDo (newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo); 
    toDoList.appendChild(li);
}

function handleToDoList (event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoobj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoobj);
    paintToDo(newTodoobj);
    savedToDos();
}

toDoForm.addEventListener("submit", handleToDoList);

const savedToDo = localStorage.getItem("todos");

if (savedToDo !== null) {
    const parsedToDos = JSON.parse(savedToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}