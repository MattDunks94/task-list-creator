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

function loadTaskList(input, callback, alert) {
    let savedData = JSON.parse(localStorage.getItem("tasks"));
    if (localStorage.getItem("tasks")) {
        for (let task of savedData) {
            input.value = task;
            callback();
            alert.innerHTML = loadedTaskAlert;
            alertTimeout(alertBox);
        };
    };
};

// Loads saved localstorage data, renders to the DOM via func() = addTask(), displays alert.
// function loadTaskList(input, callback, alert) {
//     JSON.parse(localStorage.getItem("tasks")).forEach((task) => {
//         input.value = task;
//         callback();
//         alert.innerHTML = loadedTaskAlert;
//         // Set 3s timeout for alert box display.
//         alertTimeout(alertBox);
//     });
// };

/**  
 * Clears Task List. 
 * Resets arrayOfTasks and uniqueTasks arrays.
 * Removes, displays elements to the DOM.
*/
function clearTaskList(headers, counter, array1, array2) {
    let tasks = document.querySelectorAll("#taskListDiv ul");
    tasks.forEach((task) => {
        task.remove();
    });
    headers.parentElement.classList.add("d-none");
    document.getElementById("noTasks").classList.remove("d-none");
    counter.classList.add("d-none");
    array1.length = 0;
    array2.length = 0;
};