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
        // Creating all li elements.
        let [taskNameElement, priorityElement, doneElement, removeElement] = [
            document.createElement("li"),
            document.createElement("li"),
            document.createElement("li"),
            document.createElement("li")
        ];

        // Removing li element borders and adding bootstrap classes to each li element.
        [taskNameElement, priorityElement, doneElement, removeElement].forEach(
            (element) => {
                element.style.border = "none";
                element.classList.add("list-group-item", "w-25");
            }
        );

        // Task Name Element.
        taskNameElement.innerText = input.value;
        taskNameElement.classList.add("text-truncate");

        // Create required buttons.
        let [upBtn, importantBtn, downBtn, doneBtn, removeBtn] = [
            document.createElement("button"),
            document.createElement("button"),
            document.createElement("button"),
            document.createElement("button"),
            document.createElement("button")
        ];

        importantBtn.classList.add("mx-lg-4", "mx-4", "red-btn");
        // Priority li element btns innerHTML, fontawesome icons.
        [upBtn.innerHTML, importantBtn.innerHTML, downBtn.innerHTML] = [
            '<i class="fa-regular fa-square-caret-up fa-xl" style="color: #388eff;"></i>',
            '<i class="fa-solid fa-circle-exclamation fa-xl"></i>',
            '<i class="fa-regular fa-square-caret-down fa-xl" style="color: #388eff;"></i>'
        ]; 

        // Adding bootstrap classes to each element.
        [upBtn, importantBtn, downBtn].forEach((button) => {
            button.classList.add("btn", "p-0");
        });

        // Priority element
        priorityElement.append(upBtn, importantBtn, downBtn);
        priorityElement.classList.add("px-0");

        // Adding bootstrap classes to both done & remove btns.
        doneBtn.classList.add("btn", "btn-sm", "btn-success", "w-75");
        removeBtn.classList.add("btn", "btn-sm", "btn-danger", "w-75");
        // Done & remove btns innerText value.
        [doneBtn.innerText, removeBtn.innerText] = ["Done", "Remove"];
        // Appending both btns to their respective li element.
        [doneElement.append(doneBtn), removeElement.append(removeBtn)];

        // Adding removeTask function, click event to removeBtn.
        removeBtn.addEventListener("click", removeTask);

        // Create individual task row, containing features.
        let taskRowUl = document.createElement("ul");
        taskRowUl.classList.add("list-group", "list-group-horizontal", "mt-2");
        taskRowUl.append(taskNameElement, priorityElement, doneElement, removeElement);
        taskListDiv.append(taskRowUl);
        input.focus();
        input.value = "";

        // upBtn click event listener, containing moveTaskUp function.
        upBtn.addEventListener("click", function () {
            if (taskRowUl != taskListDiv.firstChild) {
                moveTaskUp(taskListDiv, taskRowUl);
            };
        });

        // downBtn click event listener, containing moveTaskDown function.
        downBtn.addEventListener("click", function () {
            if (taskRowUl != taskListDiv.lastChild) {
                moveTaskDown(taskListDiv, taskRowUl);
            };
        });
    };

    // Enter keypress event listener for adding tasks.
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        };
    });

    // Removes Task.
    function removeTask() {
        this.closest("ul").remove();
    };

    // Move task up list.
    function moveTaskUp (list, task) {
        list.insertBefore(task, task.previousSibling);
    };

    // Move task down.
    function moveTaskDown (list, task) {
        list.insertBefore(task.nextElementSibling, task);
    };
});