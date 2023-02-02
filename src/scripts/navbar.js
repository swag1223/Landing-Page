const hamburger = document.querySelector(".nav-hamburger-wrapper");
const navMenu = document.querySelector(".nav__menu");
const navItem = document.querySelectorAll(".nav__menu-item");

const breakPointXl = 992;

let isMobileMenuOpen = false;

if (window.innerWidth < breakPointXl) {
  navItem.forEach((link) => {
    link.firstElementChild.setAttribute("tabindex", "-1");
  });
}

hamburger.addEventListener("click", () => {
  isMobileMenuOpen = !isMobileMenuOpen;
  if (isMobileMenuOpen) {
    hamburger.firstElementChild.src = "assets/images/cancel-circle.svg";
    navMenu.classList.add("nav__menu--open");
    navItem.forEach((link) => {
      link.firstElementChild.removeAttribute("tabindex");
    });
  } else {
    hamburger.firstElementChild.src = "assets/images/hamburger.svg";
    navMenu.classList.remove("nav__menu--open");
    navItem.forEach((link) => {
      link.firstElementChild.setAttribute("tabindex", "-1");
    });
  }
});
