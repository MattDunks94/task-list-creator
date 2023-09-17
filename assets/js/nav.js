let helpHeadings = document.querySelectorAll(".help-heading");
let = [...helpHeadings];
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
            heading.parentElement.classList.replace("col-3", "col-12");
        } else {
            heading.parentElement.classList.replace("m-auto", "float-left");
            heading.parentElement.classList.replace("col-12", "col-3");
        };
    });
});
// Media query for fixed window max-width of 750px.
if (window.matchMedia("(max-width: 750px)").matches) {
    helpHeadings.forEach((heading) => {
        heading.parentElement.classList.replace("float-left", "m-auto");
        heading.parentElement.classList.replace("col-3", "col-12");
    });
};