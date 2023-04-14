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
