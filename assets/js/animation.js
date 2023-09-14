// Collecting all elements via class names.
let infoContainers = document.getElementsByClassName("info-container");
// Turning the html collections into an array individually.
let containersArray = [...infoContainers];

// Adding click event to each container.
containersArray.forEach((container) => {
    let chevrons = document.querySelectorAll(".fa-chevron-right");
    let chevronsArray = [...chevrons];
    container.addEventListener("click", function () {
        chevronsArray.forEach((chevron) => {
            chevron.classList.add("rotate-90");
        });
        if (!container.children[1].classList.contains("d-none")) {
            container.children[1].classList.add("d-none");
        } else {
            container.children[1].classList.replace("d-none", "down-fade");
        };
    });
});