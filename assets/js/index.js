document.addEventListener("DOMContentLoaded", function () {

    let input = document.getElementById("usersInput");
    // Focus on input element on page load.
    input.focus();


    let addTaskBtn = document.getElementById("addTaskBtn");
    // Adding addTask function to btn.
    addTaskBtn.addEventListener("click", addTask);

    // Task List Div.
    let taskListDiv = document.getElementById("taskListDiv");

    // Add task function.
    function addTask() {
        // Task Name Element.
        let taskNameElement = document.createElement("li");
        taskNameElement.innerText = input.value;
        taskNameElement.classList.add("text-truncate", "list-group-item", "w-25");

        // Priority Element.
        let priorityElement = document.createElement("li");
        // Important Btn
        let importantBtn = document.createElement("button");
        importantBtn.innerHTML = '<i class="fa-solid fa-circle-exclamation fa-xl" style="color: #ff0000"></i>';
        importantBtn.classList.add("btn", "p-0", "mx-lg-4", "mx-4");
        // Up Btn.
        let upBtn = document.createElement("button");
        upBtn.innerHTML = '<i class="fa-regular fa-square-caret-up fa-xl" style="color: #388eff;"></i>';
        // Down Btn.
        let downBtn = document.createElement("button");
        downBtn.innerHTML = '<i class="fa-regular fa-square-caret-down fa-xl" style="color: #388eff;"></i>';
        [upBtn, importantBtn, downBtn].forEach((button) => {
            button.classList.add("btn", "p-0");
        });
        priorityElement.append(upBtn, importantBtn, downBtn);
        priorityElement.classList.add("list-group-item", "w-25", "px-0");

        // Create individual task row, containing features.
        let taskRowUl = document.createElement("ul");
        taskRowUl.classList.add("list-group", "list-group-horizontal", "mt-2");
        taskRowUl.append(taskNameElement, priorityElement);
        taskListDiv.append(taskRowUl);
        input.focus();
        input.value = "";
    };
});