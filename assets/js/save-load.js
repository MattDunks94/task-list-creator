export {
    savedTasks,
    saveTaskList,
    loadBtn,
    loadTaskList,
    clearBtn,
    clearTaskList
}
import {
    savedTaskAlert,
    loadedTaskAlert,
    clearedListAlert,
    alertTimeout
} from "../js/alerts.js";

let savedTasks = localStorage.getItem("task-list") ? JSON.parse(localStorage.getItem("task-list")) : [];

let taskListDiv = document.getElementById("taskListDiv");
let saveBtn = document.getElementById("saveBtn");
let loadBtn = document.getElementById("loadBtn");
let clearBtn = document.getElementById("clearBtn");
let alertBox = document.getElementById("alertBox");
let input = document.getElementById("usersInput");

// Saves task list to localstorage, displays alert.
function saveTaskList() {
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
};

// saveBtn click event. Saves task list and displays alert.
saveBtn.addEventListener("click", function () {
    saveTaskList();
    input.focus();
    alertBox.innerHTML = savedTaskAlert;
    // Set 3s timeout for alert box display.
    alertTimeout(alertBox);
    loadBtn.classList.remove("disabled");
    loadBtn.addEventListener("click", function () {
        alertBox.innerHTML = loadedTaskAlert;
        alertTimeout(alertBox);
    });
});

// Loads saved data from localStorage. 
// Exported this function to index.js so addTask() can be used as callback.
function loadTaskList(input, callback) {
    let savedData = JSON.parse(localStorage.getItem("tasks"));
    if (localStorage.getItem("tasks")) {
        for (let task of savedData) {
            input.value = task;
            callback();
            alertBox.innerHTML = loadedTaskAlert;
            alertTimeout(alertBox);
        };
    };
};

/**  
 * Clears Task List. 
 * Resets arrayOfTasks and uniqueTasks arrays.
 * Removes, displays elements to the DOM.
 * Also clears localStorage.
*/
function clearTaskList(headers, counter, btn) {
    let tasks = document.querySelectorAll("#taskListDiv ul");
    tasks.forEach((task) => {
        task.remove();
    });
    taskListDiv.classList.add("d-none");
    headers.parentElement.classList.add("d-none");
    document.getElementById("noTasks").classList.remove("d-none");
    counter.classList.add("d-none");
    btn.classList.add("disabled");
    alertBox.innerHTML = clearedListAlert;
    alertTimeout(alertBox);
    localStorage.clear();
};