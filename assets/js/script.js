// Navlinks + Navigation ============================================================================

let navLinks = document.querySelectorAll("a.inner-link");
console.log("These are the section links");
console.log(navLinks);

navLinks.forEach((item) => {
    item.addEventListener("click", function () {
        // remove active class (highlight / blue circle) from previously selected section link button
        document.querySelector("nav ul li a.active").classList.remove("active");
        // add active class (highlight / blue circle) to the newly clicked section link button
        document.querySelector(`nav ul li a[href='${item.getAttribute("href")}']`).classList.add("active");
        // remove the active class from the previously selected section
        document.querySelector("main > section.active").classList.remove("active");
        // add active class to the newly clicked section so it is displayed on the screen
        document.querySelector(`main > section${item.getAttribute("href")}`).classList.add("active");
        // the active style which allows the section to be displayed is defined in assets\scss\_structure.scss
        console.log(`You clicked on ${item.getAttribute("href")}`);
    });
});

// Collapse Sidebar ============================================================================

document.querySelector("#sidebar .toggle-sidebar").addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("open");
});

// Typed.js =====================================================================================

var options = {
    strings: ["Front-End Web Developer", "Web Designer", "Back-End Web Developer"],
    loop: true,
    typeSpeed: 70,
    backSpeed: 30,
};

new Typed(".field h2", options);

// Meteors =======================================================================================

for (let i = 1; i <= 15; i++) {
    let meteor = document.createElement("span");
    meteor.classList = "meteor";
    document.querySelector("#home .meteor-shower").append(meteor);
}

// My_Work Shuffle + Modal =======================================================================

const shuffleInstance = new Shuffle(document.querySelector("#my_work .work-items"), {
    itemSelector: ".item",
});

const filterButtons = document.querySelectorAll("#my_work .filters button");

filterButtons.forEach((item) => {
    item.addEventListener("click", workFilter);
});

function workFilter() {
    const clickedButton = event.currentTarget;
    const clickedButtonGroups = clickedButton.getAttribute("data-group");
    const activeButton = document.querySelector("#my_work .filters button.active");

    activeButton.classList.remove("active");
    clickedButton.classList.add("active");

    console.log(event.currentTarget);

    shuffleInstance.filter(clickedButtonGroups);
}

var workModal = new bootstrap.Modal(document.getElementById("workModal"));
const workElements = document.querySelectorAll("#my_work .work-items .wrap");

workElements.forEach((item) => {
    item.addEventListener("click", function () {
        document.querySelector("#workModal .modal-body img").setAttribute("src", item.getAttribute("data-image"));
        document.querySelector("#workModal .modal-body .title").innerText = item.getAttribute("data-title");
        document.querySelector("#workModal .modal-body .description").innerText = item.getAttribute("data-description");
        document.querySelector("#workModal .modal-body .client .value").innerText = item.getAttribute("data-client");
        document.querySelector("#workModal .modal-body .completed .value").innerText = item.getAttribute("data-completed");
        document.querySelector("#workModal .modal-body .skills .value").innerText = item.getAttribute("data-skills");
        document.querySelector("#workModal .modal-body .project-link a").setAttribute("href", item.getAttribute("data-project-link"));

        workModal.show();
    });
});

var workModalElement = document.getElementById("workModal");
workModalElement.addEventListener("show.bs.modal", function (event) {
    document.getElementById("my_work").classList.add("blur");
    document.getElementById("sidebar").classList.add("blur");
});

workModalElement.addEventListener("hide.bs.modal", function (event) {
    document.getElementById("my_work").classList.remove("blur");
    document.getElementById("sidebar").classList.remove("blur");
    document.activeElement.blur();
});

// Contact Me Form Labels =======================================================================

const formLabels = document.querySelectorAll("#contact .form .form-item input, textarea");
formLabels.forEach((item) => {
    item.addEventListener("focus", function () {
        item.parentElement.classList.add("focus");
    })

    item.addEventListener("blur", function () {
        if (!item.value){
            item.parentElement.classList.remove("focus");
        }
    });
});
