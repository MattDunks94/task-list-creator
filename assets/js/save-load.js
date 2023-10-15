export {
    savedTasks,
    saveTaskList,
    loadBtn,
    loadTaskList,
    clearBtn
}
import {
    savedTaskAlert,
    loadedTaskAlert,
    alertTimeout
} from "../js/alerts.js";

let savedTasks = localStorage.getItem("task-list") ? JSON.parse(localStorage.getItem("task-list")) : [];

let saveBtn = document.getElementById("saveBtn");
let loadBtn = document.getElementById("loadBtn");
let clearBtn = document.getElementById("clearBtn");
let alertBox = document.getElementById("alertBox");

// Saves task list to localstorage, displays alert.
function saveTaskList() {
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
};

// saveBtn click event. Saves task list and displays alert.
saveBtn.addEventListener("click", function () {
    saveTaskList();
    alertBox.innerHTML = savedTaskAlert;
    // Set 3s timeout for alert box display.
    alertTimeout(alertBox);
});

// Loads saved localstorage data, renders to the DOM via func() = addTask(), displays alert.
function loadTaskList(input, func, alert) {
    JSON.parse(localStorage.getItem("tasks")).forEach((task) => {
        input.value = task;
        func();
        alert.innerHTML = loadedTaskAlert;
        // Set 3s timeout for alert box display.
        alertTimeout(alertBox);
    });
};