// Help Info Dropdowns.

// For Small Screens.
let accordionDropdown = `
<div class="col-12 accordion" id="accordionDropdown">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <a class="btn w-100" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Add Task
        </a>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionDropdown">
      <div class="card-body">
        <li>To add tasks to your task list, begin by typing in the task input and click the
        <button class="btn btn-sm btn-primary">Add Task</button> button or press the
        <kbd>Enter</kbd> key.</li>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <a class="btn collapsed w-100" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Remove Tasks
        </a>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionDropdown">
      <div class="card-body">
        <li>To remove tasks from your task list, click the <button
        class="btn btn-sm btn-danger">Remove</button> button.</li>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <a class="btn collapsed w-100" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Done Tasks
        </a>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionDropdown">
      <div class="card-body">
        <li>To markdown tasks as done, click the <button
        class="btn btn-sm btn-success">Done</button> button.</li>
        <li>Done tasks are marked down with a green background.</li>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingFour">
      <h2 class="mb-0">
        <a class="btn collapsed w-100" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Task Priority
        </a>
      </h2>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionDropdown">
        <div class="card-body">
            <li>To markdown tasks as important, click the <i
            class="fa-solid fa-circle-exclamation fa-xl"
            style="color: red;"></i> button.
            </li>
            <li>When clicked, the <button
                class="btn btn-sm btn-danger disabled">Remove</button>
            button will be disabled. This avoids accidental task removal.
            </li>
            <li>Use the <i class="fa-regular fa-square-caret-up fa-xl"
                style="color: #388eff;"></i>
            and
            <i class="fa-regular fa-square-caret-down fa-xl"
                style="color: #388eff;"></i>
            buttons to
            change the order of your tasks.
            </li>
        </div>
    </div>
  </div>
</div>`;

// For Large Screens.
let helpInfo = document.getElementById("helpTabList").firstElementChild;

window.addEventListener("resize", function () {
    if (this.window.innerWidth < 470) {
        helpInfo.firstElementChild.classList.add("d-none");
        helpInfo.innerHTML = accordionDropdown;
    };
});

// Save / Load / Clear Dropdown.
let saveLoadDropdown = document.getElementById("saveLoadDropdown");
let ul = saveLoadDropdown.firstElementChild;
let liElements = ul.children;
let clearBtn = document.getElementById("clearBtn");

// Media Query for save/load/clear Dropdown. 
window.addEventListener("resize", function () {
    if (this.window.innerWidth < 350) {
        // Turn dropdown into an horizontal list.
        ul.classList.add("list-group-horizontal");
        ul.classList.add("list-group");
        ul.classList.add("pl-2");
        [...liElements].forEach((element) => {
            element.classList.add("list-group");
            element.classList.add("mr-2");
            element.firstElementChild.classList.replace("w-75", "w-100");
            element.firstElementChild.classList.remove("mb-3");
        });
    } else if (this.window.innerWidth > 350) {
        ul.classList.remove("list-group-horizontal");
        ul.classList.remove("list-group");
        ul.classList.remove("pl-2");
        [...liElements].forEach((element) => {
            element.classList.remove("list-group");
            element.classList.remove("mr-2");
            element.firstElementChild.classList.replace("w-100", "w-75");
            element.firstElementChild.classList.add("mb-3");
        });
        clearBtn.classList.remove("mb-3");
    };
});
// Media query for fixed window max-width of 350px. 
if (window.matchMedia("(max-width: 350px)").matches) {
    ul.classList.add("list-group-horizontal");
    ul.classList.add("list-group");
    ul.classList.add("pl-2");
    [...liElements].forEach((element) => {
        element.classList.add("list-group");
        element.classList.add("mr-2");
        element.firstElementChild.classList.replace("w-75", "w-100");
        element.firstElementChild.classList.remove("mb-3");
    });
};