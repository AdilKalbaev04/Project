let hamburger = document.querySelector(".hamburger");
let logo = document.querySelector(".logo__a");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  logo.classList.toggle("is-active");
});

