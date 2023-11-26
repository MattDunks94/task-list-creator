import {
    mediaQueries
} from "../js/media-queries.js";

import {
    savedTasks,
    loadBtn,
    clearBtn,
    clearTaskList,
    loadTaskList
} from "../js/save-load.js";

import {
    emptyTaskAlert,
    duplicateAlert,
    alertTimeout,
    noTasksAlert
} from "../js/alerts.js";

document.addEventListener("DOMContentLoaded", function () {

    let input = document.getElementById("usersInput");
    // Focus on input element on page load.
    input.focus();

    let addTaskBtn = document.getElementById("addTaskBtn");
    // Adding addTask function to btn.
    addTaskBtn.addEventListener("click", addTask);

    // Task List Div.
    let taskListDiv = document.getElementById("taskListDiv");

    // Alert Box Div
    let alertBox = document.getElementById("alertBox");
    // Task Counter.
    let taskCounter = document.getElementById("taskCounter");
    // Task list table headers.
    let tableHeaders = document.getElementById("tableHeaders");

    // Array for tasks names.
    let arrayOfTasks = [];
    // Array for unique task names only, no duplicates.
    let uniqueTasks = [];

    // Add task function.
    function addTask() {
        // Creating all li elements.
        let [taskNameElement, priorityElement, doneElement, removeElement] = [
            document.createElement("li"),
            document.createElement("li"),
            document.createElement("li"),
            document.createElement("li")
        ];

        // Create required buttons.
        let [upBtn, importantBtn, downBtn, doneBtn, removeBtn] = [
            document.createElement("button"),
            document.createElement("button"),
            document.createElement("button"),
            document.createElement("button"),
            document.createElement("button")
        ];

        // Create individual task row, containing list elements.
        let rowUl = document.createElement("ul");
        rowUl.classList.add("list-group", "list-group-horizontal", "mt-2", "invisible-border-left");
        rowUl.append(taskNameElement, priorityElement, doneElement, removeElement);

        // Adding custom list-item class and bootstrap class to each element.
        [taskNameElement, priorityElement, doneElement, removeElement].forEach(
            (element) => {
                element.classList.add("list-item", "w-25");
            }
        );

        // Task Name Element.
        taskNameElement.innerText = input.value;
        taskNameElement.classList.add("text-truncate");
        taskNameElement.style.fontWeight = 700;
        taskNameElement.style.fontSize = '21px';

        // Priority element
        priorityElement.append(upBtn, importantBtn, downBtn);
        priorityElement.classList.add("px-0");

        importantBtn.classList.add("mx-lg-4", "mx-4", "red-btn", "opacity-30");
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

        // importantBtn click event.
        importantBtn.addEventListener("click", function () {
            this.classList.toggle("opacity-30");
            taskNameElement.classList.toggle("important-task");
            rowUl.classList.toggle("border-left-red");
            removeBtn.classList.toggle("disabled");
            // Adding/removing click event if class doesn't/does exist.
            if (removeBtn.classList.contains("disabled") === false) {
                removeBtn.addEventListener("click", removeTask);
            } else {
                removeBtn.removeEventListener("click", removeTask);
            };
            doneBtn.addEventListener("click", function () {
                taskNameElement.classList.toggle("important-task");
                rowUl.classList.toggle("border-left-red");
            });
            input.focus();
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

        // Done & Remove Elements, appending their respective btns.
        [doneElement.append(doneBtn), removeElement.append(removeBtn)];
        // Adding bootstrap classes to both done & remove btns.
        doneBtn.classList.add("btn", "btn-sm", "btn-success", "w-75");
        removeBtn.classList.add("btn", "btn-sm", "btn-danger", "w-75");
        // Done & remove btns innerText value.
        [doneBtn.innerText, removeBtn.innerText] = ["Done", "Remove"];
        // Done & remove btns font size.
        [doneBtn.style.fontSize, removeBtn.style.fontSize] = ['17px', '17px'];

        // doneBtn click event.
        doneBtn.addEventListener("click", function () {
            rowUl.classList.toggle("border-left-green");
            rowUl.classList.toggle("invisible-border-left");
            taskNameElement.classList.toggle("done-task");
            importantBtn.addEventListener("click", function () {
                taskNameElement.classList.toggle("important-task");
                rowUl.classList.toggle("border-left-red");
            });
            input.focus();
        });

        // Adding removeTask function, click event to removeBtn.
        removeBtn.addEventListener("click", removeTask);
        // Adding second click event to remove task names from arrays.
        removeBtn.addEventListener("click", function () {
            for (let i = arrayOfTasks.length - 1; i >= 0; i--) {
                if (arrayOfTasks[i] === taskNameElement.innerText) {
                    uniqueTasks.splice(i, 1);
                    arrayOfTasks.splice(i, 1);
                    savedTasks.splice(i, 1);
                };
            };
            // Display 'No tasks added!' when taskListDiv has no children.
            if (taskListDiv.children.length === 0) {
                document.getElementById("noTasks").classList.remove("d-none");
                localStorage.clear();
            };
        });

        // Checking input value, display alert if empty.
        if (input.value === "" || input.value === " ") {
            alertBox.innerHTML = emptyTaskAlert;
            rowUl.remove();
        };

        // Pushing task name to array for comparison reasons, apart from empty values.
        if (input.value !== "" && input.value != " ") {
            arrayOfTasks.push(taskNameElement.innerText);
        };

        /**
         * Iterating through arrayOfTasks.
         * For each entry, if entry is not in unique array, push entry
         * to unique array and prepend rowUl element.
         * This avoids any duplicated tasks.
         */
        arrayOfTasks.forEach((task) => {
            if (!uniqueTasks.includes(task)) {
                uniqueTasks.push(task);
                taskListDiv.prepend(rowUl);
                // Pushing task to savedTasks array.
                savedTasks.push(task);
            };
        });

        // If arrays are different length display duplicateAlert and remove entry.
        if (arrayOfTasks.length > uniqueTasks.length) {
            alertBox.innerHTML = duplicateAlert;
            arrayOfTasks.pop();
        };

        // Timeout function from 'alerts.js'
        alertTimeout(alertBox);

        // Table Headers, Task counter, display and innerText of elements.
        if (taskListDiv.children.length > 0) {
            taskListDiv.classList.remove("d-none");
            taskCounter.classList.remove("d-none");
            taskCounter.firstElementChild.innerText = taskListDiv.children.length;
            tableHeaders.parentElement.classList.remove("d-none");
            document.getElementById("noTasks").classList.add("d-none");
            clearBtn.classList.remove("disabled");
            // From media-queries.js.
            // Executes when a task is added.
            mediaQueries();
        };

        // Reset input value.
        input.value = "";
        // Refocus input after every addBtn click event.
        input.focus();
    };

    // Keypress event listener for adding tasks via "Enter" key.
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        };
    });

    // Back to top btn.
    let bttBtn = document.getElementById("bttBtn");

    // When taskListDiv is scrolled, display bttBtn, otherwise d-none.
    taskListDiv.addEventListener("scroll", function () {
        if (taskListDiv.scrollTop > 500) {
            bttBtn.parentElement.classList.replace("d-none", "fade-in");
        } else if (taskListDiv.scrollTop < 550) {
            bttBtn.parentElement.classList.replace("fade-in", "d-none");
        };
    });
    // bttBtn click event, returns user back to top of taskListDiv.
    bttBtn.addEventListener("click", function () {
        taskListDiv.scroll({
            top: 0,
            behavior: 'smooth'
        });
    });

    // LOAD TASK LIST
    /** If item "tasks" exists in localStotage, execute click event function. 
     * Otherwise remove click event, add class, display alert. 
     */
    if (localStorage.getItem("tasks")) {
        loadBtn.addEventListener("click", function () {
            loadTaskList(input, addTask);
        });
    } else {
        loadBtn.removeEventListener("click", function () {
            loadTaskList(input, addTask);
        });
        loadBtn.addEventListener("click", function () {
            alertBox.innerHTML = noTasksAlert;
            alertTimeout(alertBox);
        })
        loadBtn.classList.add("disabled");
    };

    // CLEAR TASK LIST
    clearBtn.addEventListener("click", function () {
        if (taskListDiv.children.length > 0) {
            clearTaskList(tableHeaders, taskCounter, clearBtn);
            [arrayOfTasks.length, uniqueTasks.length, savedTasks.length] = [0, 0, 0];
            loadBtn.classList.add("disabled");
            loadBtn.addEventListener("click", function () {
                alertBox.innerHTML = noTasksAlert;
                alertTimeout(alertBox);
            });
        };
        input.focus();
    });
});

// Removes Task Function.
function removeTask() {
    this.closest("ul").remove();
    taskCounter.firstElementChild.innerText = taskListDiv.children.length;
    if (taskListDiv.children.length === 0) {
        taskListDiv.classList.add("d-none");
        tableHeaders.parentElement.classList.add("d-none");
        taskCounter.classList.add("d-none");
    };
    document.getElementById("usersInput").focus();
};

// Move task up list.
function moveTaskUp(list, task) {
    list.insertBefore(task, task.previousSibling);
};

// Move task down.
function moveTaskDown(list, task) {
    list.insertBefore(task.nextElementSibling, task);
};