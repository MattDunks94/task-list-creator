// Collecting all elements via class names.
let infoContainers = document.getElementsByClassName("info-container");
// Turning the html collections into an array individually.
let containersArray = [...infoContainers];

// Adding click event to each container.
containersArray.forEach((container) => {
    container.addEventListener("click", function () {
        if (!container.children[1].classList.contains("d-none")) {
            container.children[1].classList.add("d-none");
        } else {
            container.children[1].classList.replace("d-none", "down-fade");
        };
    });
});

let helpHeadings = document.querySelectorAll(".help-heading");
let  = [...helpHeadings];

helpHeadings.forEach((heading) => {
    heading.addEventListener("click", function () {
        if (!this.firstElementChild.classList.contains("rotate-90")) {
            this.firstElementChild.classList.toggle("rotate-90");
        };
        if (this.firstElementChild.classList.contains("reverse-90") === true) {
            this.firstElementChild.classList.toggle("reverse-90");
        };
        this.addEventListener("click", function () {
            this.firstElementChild.classList.toggle("reverse-90");
            this.firstElementChild.classList.toggle("rotate-90");
        });
    });
});
