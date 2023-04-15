function showMenu(event) {
  let hamburgerMenu = document.querySelector(".hamburger-menu");
  let navBar = document.querySelector(".nav-bar");
  hamburgerMenu.classList.toggle("active");
  navBar.classList.toggle("active");
}
function hideMenu(event) {
  let hamburgerMenu = document.querySelector(".hamburger-menu");
  let navBar = document.querySelector(".nav-bar");
  hamburgerMenu.classList.remove("active");
  navBar.classList.remove("active");
}
let hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerMenu.addEventListener("click", showMenu);
let navBar = document.querySelector(".nav-bar");
let navbarLinks = document.querySelectorAll(".navbar-link");
navbarLinks.forEach((n) => n.addEventListener("click", hideMenu));

function showCakes(event) {
  event.preventDefault();
  let ageInput = document.querySelector("#age-input");
  if (ageInput.value >= 18) {
    let naughtyImages = document.querySelector("#images-nsfw");
    naughtyImages.style.display = "block";
  } else {
    let naughtyImages = document.querySelector("#images-nsfw");
    naughtyImages.style.display = "none";
    alert("Sorry! You are too young to view these, see you in a few years. 😜");
  }
}

let naughtyCakes = document.querySelector("#nsfw");
naughtyCakes.addEventListener("submit", showCakes);
