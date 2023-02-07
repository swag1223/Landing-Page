const BREAKPOINT_XL = 992;

const body = document.querySelector("body");
const hamburger = document.querySelector(".nav-hamburger-wrapper");
const navMenu = document.querySelector(".nav__menu");
const navItem = document.querySelectorAll(".nav__menu-item");

const active = "menu-item__link--active";
const open = "nav__menu--open";

let isMobileMenuOpen = false;

/** Handles the active link in the navigation. */
const handleActiveLink = () => {
  const activeLink = document.querySelector(`.${active}`);
  if (activeLink) {
    activeLink.classList.remove(active);
  }

  document.querySelector(`a[href="${document.location.hash}"]`).classList.add(active);
};

/* Disables tabindex for the navigation items. */
const disableTabIndex = () => {
  navItem.forEach((link) => {
    link.firstElementChild.setAttribute("tabindex", "-1");
  });
};

/* Enables tabindex for the navigation items. */
const enableTabIndex = () => {
  navItem.forEach((link) => {
    link.firstElementChild.removeAttribute("tabindex");
  });
};

/** Opens the navigation menu and changes the icon of the hamburger to cross icon. */
const openMenu = () => {
  body.style.overflow = "hidden";
  hamburger.firstElementChild.src = "assets/images/cancel-circle.svg";
  navMenu.classList.add(open);
  enableTabIndex();
};

/** Close the navigation menu and changes the icon of the hamburger to hamburger icon. */
const closeMenu = () => {
  body.style.overflow = "auto";
  hamburger.firstElementChild.src = "assets/images/hamburger.svg";
  navMenu.classList.remove(open);
  disableTabIndex();
};

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
  if (!isMobileMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
  isMobileMenuOpen = !isMobileMenuOpen;
});

/** Adds an event listener to each link in the navigation item list to toggle the mobile menu open/close state. */
navItem.forEach((link) => {
  link.addEventListener("click", () => {
    if (isMobileMenuOpen) {
      closeMenu();
      isMobileMenuOpen = false;
    } else {
      enableTabIndex();
    }
  });
});
