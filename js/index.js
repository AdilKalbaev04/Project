let hamburger = document.querySelector(".hamburger");
let logo = document.querySelector(".logo__a");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  logo.classList.toggle("is-active");
});

let overlay = document.querySelector(".overlay");
let none = document.querySelector(".auth-toggle");
let auth = document.querySelector(".form_auth_block");
let exit = document.querySelector(".form_auth_exit");
let topButton = document.querySelector(".on-up-cont");
// let dark = document.querySelector(".dark-btn");

none.addEventListener("click", function (e) {
  none.classList.toggle("is-active");
  auth.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
  exit.classList.toggle("is-active");
});
overlay.addEventListener("click", function () {
  none.classList.remove("is-active");
  auth.classList.remove("is-active");
  overlay.classList.toggle("is-active");
  exit.classList.toggle("is-active");
});
exit.addEventListener("click", function () {
  none.classList.remove("is-active");
  auth.classList.remove("is-active");
  overlay.classList.toggle("is-active");
  exit.classList.toggle("is-active");
});
// dark.addEventListener("click", function () {
//   document.body.classList.toggle("dark");
// });

window.addEventListener("scroll", function () {
  let wScroll = this.scrollY;
  if (wScroll >= 500) {
    topButton.classList.add("active");
  } else {
    topButton.classList.remove("active");
  }
});
