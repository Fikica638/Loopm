const taskList = document.getElementById("task-list");


function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();


    if (taskText !== "") {
        createTaskElement(taskText);
        taskInput.value = ""; 
    } else {
        alert("Please enter a task.");
    }
}


function createTaskElement(taskText) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text");
    taskSpan.innerText = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteTask(taskItem);

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}


function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}


const sampleTasks = ["Learn JavaScript", "Build a website", "Read a book"];
sampleTasks.forEach(task => createTaskElement(task));
