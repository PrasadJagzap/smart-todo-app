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

deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
    saveTasks();
});

li.appendChild(deleteBtn);

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        taskList.innerHTML = savedTasks;

        const allTasks = document.querySelectorAll("li");

        allTasks.forEach(function (li) {

            // Complete toggle
            li.addEventListener("click", function () {
                li.classList.toggle("completed");
                saveTasks();
            });

            // Delete button
            const deleteBtn = li.querySelector("button");

            deleteBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                li.remove();
                saveTasks();
            });

        });
    }

}

loadTasks();