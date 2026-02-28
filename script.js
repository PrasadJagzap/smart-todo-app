const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add button click
addBtn.addEventListener("click", addTask);

// Create Task Function
function addTask() {

    const taskText = input.value.trim();
    if (taskText === "") return;

    createTaskElement(taskText);

    input.value = "";
    saveTasks();
}

// Create Task Element (Reusable)
function createTaskElement(taskText, completed = false) {

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    if (completed) {
        li.classList.add("completed");
    }

    // Toggle Complete
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

// Save Tasks
function saveTasks() {

    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.querySelector("span").textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load Tasks
function loadTasks() {

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}

loadTasks();