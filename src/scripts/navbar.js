const BREAKPOINT_XL = 992;

const body = document.querySelector("body");
const hamburger = document.querySelector(".nav-hamburger-wrapper");
const navMenu = document.querySelector(".nav__menu");
const navItem = document.querySelectorAll(".nav__menu-item");

const active = "menu-item__link--active";
const open = "nav__menu--open";

let isMobileMenuOpen = false;

// Check if the width of the window is less than the breakpoint
if (window.innerWidth < BREAKPOINT_XL) {
  //Call disableTabIndex if the condition is met
  disableTabIndex();
}

/**
 * @function handleActiveLink
 * @description Handles changes to the active link when the URL hash changes
 * @listens hashchange
 */

//used hashchange event to detect if URL has changed.
window.addEventListener("hashchange", handleActiveLink);

/** Closes the navigation menu and changes the state of the mobile menu when a navigation item is clicked. */
hamburger.addEventListener("click", () => {
  isMobileMenuOpen = !isMobileMenuOpen;
  if (isMobileMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

navItem.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
    isMobileMenuOpen = false;
  });
});

/** Handles the active link in the navigation. */
const handleActiveLink = () => {
  navItem.forEach((link) => {
    link.firstElementChild.classList.remove(active);
  });
  document
    .querySelector(`a[href="${document.location.hash}"]`)
    .classList.add(active);
};

/* Disables tabindex for the navigation items. */
const disableTabIndex = () => {
  navItem.forEach((link) => {
    link.firstElementChild.setAttribute("tabindex", "-1");
  });
};

/** Opens the navigation menu and changes the icon of the hamburger to cross icon. */
const openMenu = () => {
  body.style.overflow = "hidden";
  hamburger.firstElementChild.src = "assets/images/cancel-circle.svg";
  navMenu.classList.add(open);
  navItem.forEach((link) => {
    link.firstElementChild.removeAttribute("tabindex");
  });
};

/** Opens the navigation menu and changes the icon of the hamburger to hamburger icon. */
const closeMenu = () => {
  body.style.overflow = "auto";
  hamburger.firstElementChild.src = "assets/images/hamburger.svg";
  navMenu.classList.remove(open);
  navItem.forEach((link) => {
    link.firstElementChild.setAttribute("tabindex", "-1");
  });
};
