export {
    emptyTaskAlert,
    duplicateAlert,
    savedTaskAlert,
    loadedTaskAlert,
    noTasksAlert,
    clearedListAlert,
    alertTimeout
};

// BOOTSTRAP ALERTS:

// Emtpy Input Value Alert.
let emptyTaskAlert = `
    <div class="alert alert-info alert-dismissible fade show w-75 mx-auto mt-2 text-center position-absolute" role="alert">
        No task added! Please enter a task.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>`;
// Task Duplicate Alert.
let duplicateAlert = `
    <div class="alert alert-warning alert-dismissible fade show  w-75 mx-auto mt-2 text-center position-absolute" role="alert">
        Task already exists!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>`;
// Saved Task List Alert
let savedTaskAlert = `
    <div class="alert alert-success alert-dismissible fade show  w-75 mx-auto mt-2 text-center position-absolute" role="alert">
        Successfully saved your task list!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>`;
// Saved Task List Alert
let loadedTaskAlert = `
<div class="alert alert-success alert-dismissible fade show  w-75 mx-auto mt-2 text-center position-absolute" role="alert">
    Successfully loaded your task list!
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
</div>`;
// Empty Storage Alert.
let noTasksAlert = `
<div class="alert alert-warning alert-dismissible fade show  w-75 mx-auto mt-2 text-center position-absolute" role="alert">
    There are no previously saved tasks to load! 
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
</div>`;
// Cleared Task List and Storage.
let clearedListAlert = `
<div class="alert alert-success alert-dismissible fade show  w-75 mx-auto mt-2 text-center position-absolute" role="alert">
    Successfully cleared task list!
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
</div>`; 
// Set 3s timeout for alert box display.
function alertTimeout(box) {
    setTimeout(() => {
        box.innerHTML = "";
    }, 3000);
}