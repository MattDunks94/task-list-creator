export { arrayOfTasks }

let arrayOfTasks = localStorage.getItem("task-list") ? JSON.parse(localStorage.getItem("task-list")) : [];

let saveBtn = document.getElementById("saveBtn");
let loadBtn = document.getElementById("loadBtn");

saveBtn.addEventListener("click", function () {
    localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
});
