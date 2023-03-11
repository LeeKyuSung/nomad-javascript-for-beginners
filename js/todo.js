const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
function deleteToDo(event) {
  console.log(event);
  const li = event.target.parentElement;
  li.remove();
}
function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDo;
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDos.push(newToDo);
  toDoInput.value = "";
  paintToDo(newToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);
