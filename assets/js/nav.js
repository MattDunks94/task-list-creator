let helpHeadings = document.querySelectorAll(".help-heading");
let  = [...helpHeadings];

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
