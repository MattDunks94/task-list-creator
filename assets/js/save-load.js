export {
    savedTasks,
    loadBtn,
    loadTaskList
}
import {
    savedTaskAlert,
    loadedTaskAlert
} from "../js/alerts.js";

let savedTasks = localStorage.getItem("task-list") ? JSON.parse(localStorage.getItem("task-list")) : [];

let saveBtn = document.getElementById("saveBtn");
let loadBtn = document.getElementById("loadBtn");
let alertBox = document.getElementById("alertBox");

// Saves task list to localstorage, displays alert.
saveBtn.addEventListener("click", function () {
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    alertBox.innerHTML = savedTaskAlert;
    // Set 3s timeout for alert box display.
    setTimeout(() => {
        alertBox.innerHTML = "";
    }, 3000);
});

// Loads saved localstorage data, renders to the DOM via func() = addTask().
function loadTaskList(input, func, alert) {
    JSON.parse(localStorage.getItem("tasks")).forEach((task) => {
        input.value = task;
        func();
        alert.innerHTML = loadedTaskAlert;
        // Set 3s timeout for alert box display.
        setTimeout(() => {
            alertBox.innerHTML = "";
        }, 3000);
    });
};