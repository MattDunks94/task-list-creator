let helpHeadings = document.querySelectorAll(".help-heading");
// Toggling animation classes for nav elements, icons.
helpHeadings.forEach((heading) => {
    heading.addEventListener("click", function () {
        if (!this.firstElementChild.classList.contains("rotate-90")) {
            this.firstElementChild.classList.toggle("rotate-90");
            this.nextElementSibling.classList.toggle("d-none");
            this.nextElementSibling.classList.toggle("down-fade");
        };
        if (this.firstElementChild.classList.contains("reverse-90") === true) {
            this.firstElementChild.classList.toggle("reverse-90");
        };
        this.addEventListener("click", function () {
            this.firstElementChild.classList.toggle("reverse-90");
            this.firstElementChild.classList.toggle("rotate-90");
            this.nextElementSibling.classList.toggle("d-none");
            this.nextElementSibling.classList.toggle("down-fade");
        });
    });
});

// CUSTOM MEDIA QUERIES.
// Window event listener for resizing to width of < 750px. 
window.addEventListener("resize", function () {
    helpHeadings.forEach((heading) => {
        if (this.window.innerWidth < 750) {
            heading.parentElement.classList.replace("float-left", "m-auto");
            heading.parentElement.classList.replace("col-3", "col-11");
            heading.nextElementSibling.classList.add("position-relative");
            heading.classList.add("mb-2");
        } else {
            heading.parentElement.classList.replace("m-auto", "float-left");
            heading.parentElement.classList.replace("col-11", "col-3");
            heading.nextElementSibling.classList.remove("position-relative");
            heading.classList.remove("mb-2");
        };
    });
});
// Media query for fixed window max-width of 750px.
if (window.matchMedia("(max-width: 750px)").matches) {
    helpHeadings.forEach((heading) => {
        heading.parentElement.classList.replace("float-left", "m-auto");
        heading.parentElement.classList.replace("col-3", "col-11");
        heading.nextElementSibling.classList.add("position-relative");
        heading.classList.add("mb-2");
    });
};

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