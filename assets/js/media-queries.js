let addTaskBtn = document.getElementById("addTaskBtn")
let taskListDiv = document.getElementById("taskListDiv");
let tasks = taskListDiv.children;

addTaskBtn.addEventListener("click", function () {
    // Media Queries for window resizing events.
    window.addEventListener("resize", function () {
        if (this.window.innerWidth < 540) {
            for (let task = 0; task < tasks.length; task++) {
                tasks[task].classList.remove("list-group-horizontal");
                tasks[task].classList.replace("mt-2", "py-3");
                tasks[task].childNodes.forEach((element) => {
                    element.classList.remove("w-25");
                    element.classList.remove("px-0");
                });
            };
        } else if (this.innerWidth >= 540) {
            for (let task = 0; task < tasks.length; task++) {
                tasks[task].classList.add("list-group-horizontal");
                tasks[task].classList.replace("py-3", "mt-2");
                tasks[task].childNodes.forEach((element) => {
                    element.classList.add("w-25");
                    element.classList.add("px-0");
                });
            };
        }
    });
});