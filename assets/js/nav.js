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