import img from "@images/cancel-circle.svg";

const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");
const navItem = document.querySelectorAll(".nav__item");

let activeLink = document.querySelector(".nav__item--active");


if (navMenu.classList.contains("active")) {
  navItem.forEach((link) => {
    link.removeAttribute("tabindex");
  });
} else {
  navItem.forEach((link) => {
    link.setAttribute("tabindex", "-1");
  });
}

hamburger.addEventListener("click", () => {
  console.log("clicked");
  hamburger.classList.toggle("nav__menu--open");
  navMenu.classList.toggle("nav__menu--open");
  if (hamburger.classList.contains("nav__menu--open")) {
    hamburger.firstElementChild.src = "assets/images/cancel-circle.svg";
  } else {
    hamburger.firstElementChild.src = "assets/images/hamburger.svg";
  }
});

navItem.forEach((link) =>
  link.addEventListener("click", () => {
    
    link.classList.add("nav__item--active");
    activeLink.classList.remove("nav__item--active");
    activeLink = link;

    hamburger.classList.remove("nav__menu--open");
    navMenu.classList.remove("nav__menu--open");

    hamburger.firstElementChild.src = "assets/images/hamburger.svg";
  })
);
