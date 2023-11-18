// Help Info Dropdowns.

// For Small Screens.
let accordionDropdown = `
<div class="accordion" id="accordionDropdown">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionDropdown">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionDropdown">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionDropdown">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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