import { BREAKPOINT_XL } from "./constants";

const body = document.querySelector(".js-body");
const hamburger = document.querySelector(".js-nav-hamburger-wrapper");
const navMenu = document.querySelector(".js-nav-menu");
const navItem = document.querySelectorAll(".js-nav-item");

const open = "nav__menu--open";

const hidden = "visibility-hidden";
const noScroll = "no-scroll";

let isMobileMenuOpen = false;
let enableTabTrapping = false;

/**
 * Opens the navigation menu and
 *  displays a close icon when the navigation menu is open.
 */
const openMenu = () => {
  if (!enableTabTrapping) {
    enabletabTrap();
  }
  body.classList.add(noScroll);
  hamburger.firstElementChild.src = "assets/images/cancel-circle.svg";
  navMenu.classList.add(open);
  navMenu.classList.remove(hidden);
};

/**
 * Closes navigation menu and changes the hamburger icon to the default hamburger icon
 */
const closeMenu = () => {
  body.classList.remove(noScroll);
  hamburger.firstElementChild.src = "assets/images/hamburger.svg";
  navMenu.classList.remove(open);
  navMenu.classList.add(hidden);
};

/**
 * A function that handles resizing of the window and adjusts the display of
 * elements based on whether the screen size is below or above a certain breakpoint.
 */
const handleResize = () => {
  // Determine whether the screen is smaller than than 992px breakpoint
  const isMobileScreen = window.innerWidth < BREAKPOINT_XL;

  // If the screen is in mobile view
  if (isMobileScreen) {
    // If the mobile menu is open
    if (isMobileMenuOpen) {
      // Show the navigation menu
      navMenu.classList.remove(hidden);
    } else {
      // Hide the navigation menu
      navMenu.classList.add(hidden);
    }
  } else {
    // If the screen is in desktop view, show the navigation menu
    navMenu.classList.remove(hidden);
  }
};

/**
 * A function that enables trapping focus within the navbar when mobile menu is open.
 */

const enabletabTrap = () => {
  const focusElementSelectors = document.querySelectorAll(".js-nav-el");
  const firstFocusElement = focusElementSelectors[0];
  const lastFocusElement = focusElementSelectors[focusElementSelectors.length - 1];
  enableTabTrapping = true;
  /**
   * The keydown event is being listened for on the document object and
   * the function passed as the second parameter is called whenever the event is triggered.
   * The e parameter represents the event object that is passed to the function.
   */
  document.addEventListener("keydown", (e) => {
    const isTabPressed = e.key === "Tab";

    //if some other key is pressed function in returned
    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusElement) {
        lastFocusElement.focus(); // add focus for the last focusable element
        /**
         * the default behavior of the Tab key
         * (moving focus to the next element) is prevented.
         */
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusElement) {
        /**
         * if focused has reached to last focusable element then
         * focus first focusable element after pressing tab
         */
        firstFocusElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });
};

/**
 * initially if not in desktop view ,
 * navigation menu is hidden
 */
if (window.innerWidth < BREAKPOINT_XL) {
  navMenu.classList.add(hidden);
}

/**
 * add the "resize" event listener to the window and call the handleResize
 * function when the event is triggered
 */
window.addEventListener("resize", handleResize);

/**
 * Closes the navigation menu and changes the state of the mobile menu
 * when a navigation item is clicked.
 */
hamburger.addEventListener("click", () => {
  if (!isMobileMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
  isMobileMenuOpen = !isMobileMenuOpen;
});

/**
 *  Adds an event listener to each link in the navigation item list
 * to toggle the mobile menu open/close state.
 */
navItem.forEach((link) => {
  link.addEventListener("click", () => {
    if (isMobileMenuOpen) {
      closeMenu();
      isMobileMenuOpen = false;
    }
  });
});
