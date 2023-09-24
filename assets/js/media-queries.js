export function mediaQueries() {
    let taskListDiv = document.getElementById("taskListDiv");
    let tasks = taskListDiv.children;
    let btns = document.querySelectorAll("#taskListDiv button");
    let btnsArray = [...btns];
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
            btnsArray.forEach((btn) => {
                btn.classList.replace("w-75", "w-100");
                btn.classList.remove("btn-sm");
            });
            // upBtn
            btnsArray[0].classList.add("float-left");
            // downBtn
            btnsArray[2].classList.add("float-right");
        } else if (this.innerWidth >= 540) {
            for (let task = 0; task < tasks.length; task++) {
                tasks[task].classList.add("list-group-horizontal");
                tasks[task].classList.replace("py-3", "mt-2");
                tasks[task].childNodes.forEach((element) => {
                    element.classList.add("w-25");
                    element.classList.add("px-0");
                });
            };
            btnsArray.forEach((btn) => {
                btn.classList.replace("w-100", "w-75");
                btn.classList.add("btn-sm");
            });
            // upBtn
            btnsArray[0].classList.remove("float-left");
            // downBtn
            btnsArray[2].classList.remove("float-right");
        };
    });

    if (window.matchMedia("(max-width: 540px)").matches) {
        for (let task = 0; task < tasks.length; task++) {
            tasks[task].classList.remove("list-group-horizontal");
            tasks[task].classList.replace("mt-2", "py-3");
            tasks[task].childNodes.forEach((element) => {
                element.classList.remove("w-25");
                element.classList.remove("px-0");
            });
        };
        btnsArray.forEach((btn) => {
            btn.classList.replace("w-75", "w-100");
            btn.classList.remove("btn-sm");
        });
        // upBtn
        btnsArray[0].classList.add("float-left");
        // downBtn
        btnsArray[2].classList.add("float-right");
    };
};