const todos = [];
const addButton = document.querySelector("#button");
addButton.addEventListener("click", handleClick);
const taskInput = document.querySelector("#add_task");
const taskList = document.querySelector("#list");
const noText = document.querySelector("#empty_field");
const counterBox = document.querySelector("#counter");
let completedCount = 0;


counterBox.textContent = "0 uppgifter avklarade";

function handleClick() {
  if (taskInput.value === "") {
    noText.textContent = "Input must not be empty";
    noText.classList.remove("blink-error");
    void noText.offsetWidth;
    noText.classList.add("blink-error");

    return;
  }

  noText.textContent = "";
  noText.classList.remove("blink-error");
  

  const newTask = document.createElement("li");
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskInput.value;
  newTask.appendChild(taskSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.classList.add("delete-btn");
  newTask.appendChild(deleteBtn);

  taskList.appendChild(newTask);

  todos.push({ name: taskInput.value, status: false });
  console.log(todos);


  newTask.addEventListener("click", function () {
    newTask.classList.toggle("completed");



    const index = todos.map(t => t.name).indexOf(taskSpan.textContent);

    if (newTask.classList.contains("completed")) {
     completedCount++;
      if (index !== -1) {
        todos[index].status = true;
      }
    } else {
      completedCount--;
      if (index !== -1) {
        todos[index].status = false;
      }
    }

    counterBox.textContent = `${completedCount} uppgifter check`;
    console.log(todos);
  });

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();

    const index = todos.map(t => t.name).indexOf(taskSpan.textContent);

    if (newTask.classList.contains("completed")) {
      completedCount--;
    }


    if (index !== -1) {
      todos.splice(index, 1);
    }

    newTask.remove();
    counterBox.textContent = `${completedCount} uppgifter check`;
    console.log(todos);
  });

  taskInput.value = "";
}