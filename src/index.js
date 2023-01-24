import "./styles/main.scss";

console.log("swaijot kaur");
const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");

console.log(hamburger);
console.log(navMenu);

hamburger.addEventListener("click", () => {
  console.log("clicked");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__item").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
