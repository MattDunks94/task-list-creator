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

        // Adding custom list-item class and bootstrap class to each element.
        [taskNameElement, priorityElement, doneElement, removeElement].forEach(
            (element) => {
                element.classList.add("list-item", "w-25");
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

        importantBtn.classList.add("opacity");

        // importantBtn click event.
        importantBtn.addEventListener("click", function () {
            this.classList.toggle("opacity");
            taskNameElement.classList.toggle("important-task");
            this.closest("ul").classList.toggle("border-left-red");
            removeBtn.classList.toggle("disabled");
            // Adding/removing click event if class doesn't/does exist.
            if (removeBtn.classList.contains("disabled") === false) {
                removeBtn.addEventListener("click", removeTask);
            } else {
                removeBtn.removeEventListener("click", removeTask);
            };
        });

        // upBtn click event listener, containing moveTaskUp function.
        upBtn.addEventListener("click", function () {
            if (rowUl != taskListDiv.firstElementChild) {
                moveTaskUp(taskListDiv, rowUl);
            };
            input.focus();
        });

        // downBtn click event listener, containing moveTaskDown function.
        downBtn.addEventListener("click", function () {
            if (rowUl !== taskListDiv.lastElementChild) {
                moveTaskDown(taskListDiv, rowUl);
            };
            input.focus();
        });

        // Adding bootstrap classes to both done & remove btns.
        doneBtn.classList.add("btn", "btn-sm", "btn-success", "w-75");
        removeBtn.classList.add("btn", "btn-sm", "btn-danger", "w-75");
        // Done & remove btns innerText value.
        [doneBtn.innerText, removeBtn.innerText] = ["Done", "Remove"];
        // Appending both btns to their respective li element.
        [doneElement.append(doneBtn), removeElement.append(removeBtn)];

        // doneBtn click event.
        doneBtn.addEventListener("click", function () {
            this.closest("ul").classList.toggle("border-left-green");
            this.closest("ul").classList.toggle("invisible-border-left");
            taskNameElement.classList.toggle("done-task");
        });

        // Adding removeTask function, click event to removeBtn.
        removeBtn.addEventListener("click", removeTask);

        // Create individual task row, containing features.
        let rowUl = document.createElement("ul");
        rowUl.classList.add("list-group", "list-group-horizontal", "mt-2", "invisible-border-left");
        rowUl.append(taskNameElement, priorityElement, doneElement, removeElement);
        taskListDiv.append(rowUl);
        input.focus();
        input.value = "";
    };

    // Keypress event listener for adding tasks via "Enter" key.
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
    function moveTaskUp(list, task) {
        list.insertBefore(task, task.previousSibling);
    };

    // Move task down.
    function moveTaskDown(list, task) {
        list.insertBefore(task.nextElementSibling, task);
    };
});