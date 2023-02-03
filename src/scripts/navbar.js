const body = document.querySelector("body");
const hamburger = document.querySelector(".nav-hamburger-wrapper");
const navMenu = document.querySelector(".nav__menu");
const navItem = document.querySelectorAll(".nav__menu-item");
const breakPointXl = 992;

let isMobileMenuOpen = false;

if (window.innerWidth < breakPointXl) {
  disableTabIndex();
}
window.addEventListener('hashchange', handleActiveLink);

hamburger.addEventListener("click", () => {
  isMobileMenuOpen = !isMobileMenuOpen;
  if (isMobileMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});


function handleActiveLink() {
  navItem.forEach((link)=>{
    link.firstElementChild.classList.remove("menu-item__link--active");
    
  });
  document.querySelector(`a[href="${document.location.hash}"]`).classList.add("menu-item__link--active");
  
  if(isMobileMenuOpen) {
    closeMenu();
    isMobileMenuOpen=false;
  };
}

function disableTabIndex(){
  navItem.forEach((link) => {
    link.firstElementChild.setAttribute("tabindex", "-1");
  });
}

function openMenu() {
  body.style.overflow = "hidden";
  hamburger.firstElementChild.src = "assets/images/cancel-circle.svg";
  navMenu.classList.add("nav__menu--open");
  navItem.forEach((link) => {
    link.firstElementChild.removeAttribute("tabindex");
  });
}

function closeMenu(){
  body.style.overflow = "auto";
  hamburger.firstElementChild.src = "assets/images/hamburger.svg";
  navMenu.classList.remove("nav__menu--open");
  navItem.forEach((link) => {
    link.firstElementChild.setAttribute("tabindex", "-1");
  });

}
