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

// let chevrons = document.querySelectorAll(".fa-chevron-right");
// let chevronsArray = [...chevrons];

let h5 = document.querySelectorAll("h5");
let h5Array = [...h5];

h5Array.forEach((h) => {
    h.addEventListener("click", function () {
        this.firstElementChild.classList.toggle("rotate-90");
    });
});

