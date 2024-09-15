// JavaScript for handling the to-do list functionality

document.getElementById("add-task-btn").addEventListener("click", function() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const taskList = document.getElementById("task-list");

    // Create list item
    const li = document.createElement("li");

    // Add task text
    li.textContent = taskText;

    // Add complete toggle functionality
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Add delete functionality
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // Append delete button to list item
    li.appendChild(deleteBtn);

    // Append list item to the task list
    taskList.appendChild(li);
}
