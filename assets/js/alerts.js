export {
    emptyTaskAlert,
    duplicateAlert,
    savedTaskAlert,
    loadedTaskAlert
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