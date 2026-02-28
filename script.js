const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    addTask();
});

function addTask() {

    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    taskList.appendChild(li);

    input.value = "";
    saveTasks();
}

li.addEventListener("click", function () {
    li.classList.toggle("completed");
    saveTasks();
});

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";

deleteBtn.addEventListener("click", function () {
    li.remove();
    saveTasks();
});

li.appendChild(deleteBtn);

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks");
}

loadTasks();