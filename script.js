let listGroup = document.querySelector("#navbar-list-group");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  listGroup.classList.toggle("active");
});
