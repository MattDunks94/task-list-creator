export function mediaQueries() {
    let taskListDiv = document.getElementById("taskListDiv");
    let tasks = taskListDiv.children;
    // Collect all btns.
    let btns = document.querySelectorAll("#taskListDiv button");
    let btnsArray = [...btns];
    let upBtn = btnsArray[0];
    let downBtn = btnsArray[2];
    let doneBtn = btnsArray[3];
    let removeBtn = btnsArray[4];
    // Media Query for window resizing below width of 540px.
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
            upBtn.classList.add("float-left");
            // downBtn
            downBtn.classList.add("float-right");
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
            upBtn.classList.remove("float-left");
            // downBtn
            downBtn.classList.remove("float-right");
        };
    });

    // Media Query for window resizing below width of 430px.
    window.addEventListener("resize", function () {
        if (this.innerWidth < 430) {
            doneBtn.classList.replace("w-100", "w-48");
            removeBtn.classList.replace("w-100", "w-48");
            // Appending removeBtn to doneElement li element.
            doneBtn.parentElement.append(removeBtn);
            doneBtn.classList.add("float-left");
            removeBtn.classList.add("float-right");
            // Adding class 'd-none' to removeElement li element.
            doneBtn.parentElement.nextElementSibling.classList.add("d-none");
        };
    });


    // Window match width of 540px, for when not screen resizing.
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
        upBtn.classList.add("float-left");
        // downBtn
        downBtn.classList.add("float-right");
    };
};