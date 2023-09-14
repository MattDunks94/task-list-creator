let infoContainers = document.getElementsByClassName("info-container");
let containersArray = [...infoContainers];

containersArray.forEach((container) => {
    container.addEventListener("click", function () {
        if (!container.children[1].classList.contains("d-none")) {
            container.children[1].classList.add("d-none");
        } else {
            container.children[1].classList.replace("d-none", "down-fade");
        };
    });
});