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
}

li.addEventListener("click", function () {
    li.classList.toggle("completed");
});

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";

deleteBtn.addEventListener("click", function () {
    li.remove();
});

li.appendChild(deleteBtn);