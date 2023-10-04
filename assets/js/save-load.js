import { removeTask, moveTaskUp } from "../js/index.js";
export { savedTasks }

let savedTasks = localStorage.getItem("task-list") ? JSON.parse(localStorage.getItem("task-list")) : [];

let saveBtn = document.getElementById("saveBtn");
let loadBtn = document.getElementById("loadBtn");
let taskListDiv = document.getElementById("taskListDiv");
// Task Counter.
let taskCounter = document.getElementById("taskCounter");
// Task list table headers.
let tableHeaders = document.getElementById("tableHeaders");

saveBtn.addEventListener("click", function () {
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
});

// function loadTasks () {
//     JSON.parse(localStorage.getItem("tasks")).forEach((task) => {
//         taskListDiv.innerHTML = task;
//     });
// };

loadBtn.addEventListener("click", function () {
    JSON.parse(localStorage.getItem("tasks")).forEach((task) => {
        taskListDiv.innerHTML = task;
        if (taskListDiv.children.length > 0) {
            taskCounter.classList.remove("d-none");
            taskCounter.firstElementChild.innerHTML = taskListDiv.children.length;
            tableHeaders.parentElement.classList.remove("d-none");
            document.getElementById("noTasks").classList.add("d-none");
        };
    });
    let taskBtns = document.querySelectorAll("#taskListDiv button");
    for (let btn = 0; btn < taskBtns.length; btn++) {
        // Remove Btn click event.
        if (taskBtns[btn].classList.contains("btn-danger") === true) {
            taskBtns[btn].addEventListener("click", function () {
                taskBtns[btn].closest("ul").remove();
            });
        };
    };
});
