export function mediaQueries() {
    // Task List Div.
    let taskListDiv = document.getElementById("taskListDiv");
    // All Tasks (ul elements).
    let tasks = taskListDiv.children;
    // Collect all btns.
    let btns = document.querySelectorAll("#taskListDiv button");
    // Convert 'btns' into html collection.
    let btnsArray = [...btns];
    // Assign each btn to variable. (apart from importantBtn).
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

    // Media Query for window resizing below width of 430px.
    window.addEventListener("resize", function () {
        if (this.innerWidth < 430) {
            doneBtn.classList.replace("w-100", "w-48");
            removeBtn.classList.replace("w-100", "w-48");
            // Change innerHTML to 'done' and 'remove' btns to FA icons.
            doneBtn.innerHTML = '<i class="fa-regular fa-circle-check fa-xl" style="color: #ffffff;"></i>';
            removeBtn.innerHTML = '<i class="fa-solid fa-trash-can fa-xl" style="color: #ffffff;"></i>';
            // Appending removeBtn to doneElement li element.
            doneBtn.parentElement.append(removeBtn);
            doneBtn.classList.add("float-left");
            removeBtn.classList.add("float-right");
            // Temporarily adding class 'd-none' to removeElement li element.
            doneBtn.parentElement.nextElementSibling.classList.add("d-none");
        } else {
            doneBtn.classList.replace("w-48", "w-100");
            // Reinstating the original innerHTML to btns.
            doneBtn.innerHTML = "Done";
            removeBtn.innerHTML = "Remove";
            removeBtn.classList.replace("w-48", "w-100");
            doneBtn.classList.remove("float-left");
            removeBtn.classList.remove("float-right");
            // Re-appending removeBtn to original li element.
            doneBtn.parentElement.nextElementSibling.append(btnsArray[4]);
            // Removing class 'd-none' from removeElement li element.
            doneBtn.parentElement.nextElementSibling.classList.remove("d-none");
        };
    });

    if (window.matchMedia("(max-width: 430px)").matches) {
        doneBtn.classList.replace("w-100", "w-48");
        removeBtn.classList.replace("w-100", "w-48");
        doneBtn.innerHTML = '<i class="fa-regular fa-circle-check fa-xl" style="color: #ffffff;"></i>';
        removeBtn.innerHTML = '<i class="fa-solid fa-trash-can fa-xl" style="color: #ffffff;"></i>';
        // Appending removeBtn to doneElement li element.
        doneBtn.parentElement.append(removeBtn);
        doneBtn.classList.add("float-left");
        removeBtn.classList.add("float-right");
        // Adding class 'd-none' to removeElement li element.
        doneBtn.parentElement.nextElementSibling.classList.add("d-none");
    };
};