import img from "./assets/images/cancel-circle.svg";
const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");
const navItem = document.querySelectorAll(".nav__item");

console.log(hamburger);
console.log(navMenu);

hamburger.addEventListener("click", () => {
  console.log("clicked");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  if (hamburger.classList.contains("active")) {
    hamburger.firstElementChild.src = "assets/images/cancel-circle.svg";
  } else {
    hamburger.firstElementChild.src = "assets/images/hamburger.svg";
  }
});

navItem.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

    hamburger.firstElementChild.src = "assets/images/hamburger.svg";
  })
);
