let helpTabList = document.getElementById("helpTabList");
let helpToggler = document.getElementById("helpToggler");
let modalContainer = document.getElementById("modalContainer");
let modalBackdrop = document.getElementsByClassName("modal-backdrop");

// Modal for displaying help info on small screens.
let helpModal = `
<button id="modalToggler" type="button" class="navbar-toggler p-0 ml-3" data-toggle="modal" data-target="#modalScrollable">
<span><i class="fa-solid fa-question"></i></span>
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
</div>`;

window.addEventListener("resize", function () {
    if (this.window.innerWidth < 540) {
        helpToggler.classList.add("d-none");
        modalContainer.innerHTML = helpModal;
        helpTabList.classList.add("d-none");
    } else {
        helpToggler.classList.remove("d-none");
        modalContainer.innerHTML = '';
        helpTabList.classList.remove("d-none");
        [...modalBackdrop].forEach((backdrop) => {
          backdrop.remove();
        });
    };
});