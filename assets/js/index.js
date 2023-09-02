document.addEventListener("DOMContentLoaded", function () {

    let input = document.getElementById("usersInput");
    // Focus on input element on page load.
    input.focus();

    // Important Task Element.
    let priorityElement = document.createElement("li");
    // Important Btn
    let importantBtn = document.createElement("button");
    importantBtn.innerHTML = '<i class="fa-solid fa-circle-exclamation fa-xl"></i>';

    let addTaskBtn = document.getElementById("addTaskBtn");
    // Add task btn "click" event listener.
    addTaskBtn.addEventListener("click", addTask);

    let taskListDiv = document.getElementById("taskListDiv");

    // Add task function.
    function addTask() {
        // Task Name Element.
        let taskNameElement = document.createElement("li");
        taskNameElement.innerText = input.value;
        taskNameElement.classList.add("text-truncate", "list-group-item", "w-25");
        // Create individual task row, containing features.
        let taskRowUl = document.createElement("ul");
        taskRowUl.classList.add("list-group", "list-group-horizontal", "mt-2");
        taskRowUl.append(taskNameElement);
        taskListDiv.append(taskRowUl);
        input.focus();
        input.value = "";
    };
});