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

        let [taskNameElement, priorityElement, doneElement, removeElement] = [
            document.createElement("li"),
            document.createElement("li"),
            document.createElement("li"),
            document.createElement("li")
        ];
        // Task Name Element.
        // let taskNameElement = document.createElement("li");
        taskNameElement.innerText = input.value;
        taskNameElement.classList.add("text-truncate", "list-group-item", "w-25");

        // Priority Element.
        // let priorityElement = document.createElement("li");
        // Important Btn
        let importantBtn = document.createElement("button");
        importantBtn.innerHTML = '<i class="fa-solid fa-circle-exclamation fa-xl"></i>';
        importantBtn.classList.add("mx-lg-4", "mx-4", "red-btn");
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

        // Done & Remove btns.
        let [doneBtn, removeBtn] = [
            document.createElement("button"),
            document.createElement("button"),
        ];

        doneBtn.classList.add("btn", "btn-sm", "btn-success", "w-75"); 
        removeBtn.classList.add("btn", "btn-sm", "btn-danger", "w-75"); 
        [doneBtn.innerText, removeBtn.innerText] = ["Done", "Remove"];
        doneElement.append(doneBtn);
        removeElement.append(removeBtn);
        doneElement.classList.add("list-group-item", "w-25");
        removeElement.classList.add("list-group-item", "w-25");

        // Create individual task row, containing features.
        let taskRowUl = document.createElement("ul");
        taskRowUl.classList.add("list-group", "list-group-horizontal", "mt-2");
        taskRowUl.append(taskNameElement, priorityElement, doneElement, removeElement);
        taskListDiv.append(taskRowUl);
        input.focus();
        input.value = "";
    };
});