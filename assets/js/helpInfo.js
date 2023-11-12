let helpListTabs = `
<div class="row mt-2 ml-2">
    <div class="col-4">
        <div class="list-group" id="list-tab" role="tablist">
            <!-- Add Task Tab -->
            <a class="list-group-item list-group-item-action active" id="list-home-list"
                data-toggle="list" href="#addingTasks" role="tab" aria-controls="home">Add Task</a>
            <!-- Remove Task Tab -->
            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list"
                href="#removeTasks" role="tab" aria-controls="profile">Remove Tasks</a>
            <!-- Completed Task Tab -->
            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list"
                href="#completedTasks" role="tab" aria-controls="messages">Completed Tasks</a>
            <!-- Priority Tab -->
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list"
                href="#priority" role="tab" aria-controls="settings">Task Priority</a>
        </div>
    </div>
    <div class="col-8">
        <div class="tab-content" id="nav-tabContent">
            <!-- Add Tasks Help Info -->
            <div class="tab-pane fade show active" id="addingTasks" role="tabpanel"
                aria-labelledby="list-home-list">
                <li>To add tasks to your task list, begin by typing in the task input and click the
                    <button class="btn btn-sm btn-primary">Add Task</button> button or press the
                    <kbd>Enter</kbd> key.</li>
            </div>
            <!-- Remove Tasks Help Info -->
            <div class="tab-pane fade" id="removeTasks" role="tabpanel"
                aria-labelledby="list-profile-list">
                <li>To remove tasks from your task list, click the <button
                        class="btn btn-sm btn-danger">Remove</button> button.</li>
            </div>
            <!-- Completed Tasks Help Info -->
            <div class="tab-pane fade" id="completedTasks" role="tabpanel"
                aria-labelledby="list-messages-list">
                <li>To markdown tasks as done, click the <button
                        class="btn btn-sm btn-success">Done</button> button.</li>
                <li>Done tasks are marked down with a green background.</li>
            </div>
            <!-- Priority Help Info -->
            <div class="tab-pane fade" id="priority" role="tabpanel"
                aria-labelledby="list-settings-list">
                <li>To markdown tasks as important, click the <i
                        class="fa-solid fa-circle-exclamation fa-xl" style="color: red;"></i> button.
                </li>
                <li>When clicked, the <button class="btn btn-sm btn-danger disabled">Remove</button>
                    button will be disabled. This avoids accidental task removal.</li>
                <li>Use the <i class="fa-regular fa-square-caret-up fa-xl" style="color: #388eff;"></i>
                    and
                    <i class="fa-regular fa-square-caret-down fa-xl" style="color: #388eff;"></i>
                    buttons to
                    change the order of your tasks.
                </li>
            </div>
        </div>
    </div>
</div>`

// Modal for displaying help info on small screens.
let helpModal = `
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalScrollable">
  Launch demo modal
</button>

<div class="modal fade" id="modalScrollable" tabindex="-1" role="dialog" aria-labelledby="modalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalScrollableTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`

let helpContainer = document.getElementById("helpContainer");

window.addEventListener("resize", function () {
    if (this.window.innerWidth < 540) {
        helpContainer.innerHTML = helpModal;
    } else {
        helpContainer.innerHTML = helpListTabs;
    };
});