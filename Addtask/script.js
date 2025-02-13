// Select Elements
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {
    let tasks = taskInput.value.trim();
    
    // take task text
    let li = document.createElement("li");
    li.textContent = tasks;
    // Append task
    taskList.appendChild(li);
    // Clear input
    taskInput.value = "";
}

// Event Listener
addTaskButton.addEventListener("click", addTask);