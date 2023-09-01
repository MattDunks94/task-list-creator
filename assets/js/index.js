document.addEventListener("DOMContentLoaded", function () {

    let input = document.getElementById("usersInput");
    // Focus on input element on page load.
    input.focus();
    
    // Task Name Element.
    let taskNameElement = document.createElement("li");
    taskNameElement.classList.add("text-truncate");

    // Important Task Element.
    let importanceElement = document.createElement("li");
    let importantBtn = document.createElement("button");
    importantBtn.innerHTML = '<i class="fa-solid fa-circle-exclamation fa-xl"></i>';
    
    let addTaskBtn = document.getElementById("addTaskBtn");
    
    let taskListDiv = document.getElementById("taskListDiv");

    addTaskBtn.addEventListener("click", function () {
        taskNameElement.innerHTML = input.value;
        // Create individual task row, containing features.
        let taskRowUl = document.createElement("ul");
        taskRowUl.innerText = taskNameElement.innerHTML;
        taskListDiv.append(taskRowUl);
        input.focus();
        input.value = "";
    });
});