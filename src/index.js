import "./styles/main.scss";

console.log("swaijot kaur");
const hamburger = document.querySelector(".site-navigation__hamburger");
const siteNavMenu = document.querySelector(".site-navigation__menu");

console.log(hamburger);
console.log(siteNavMenu);

hamburger.addEventListener("click", () => {
  console.log("clicked");
  hamburger.classList.toggle("active");
  siteNavMenu.classList.toggle("active");
});

document.querySelectorAll(".site-navigation__menu__item").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    siteNavMenu.classList.remove("active");
  })
);
