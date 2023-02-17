const active = "active-link";

/** Handles the active link in the navigation. */
const handleActiveLink = () => {
  // Select the currently active links and remove the active class.
  const activeLinks = document.querySelectorAll(`.${active}`);
  console.log(activeLinks);
  activeLinks.forEach((link) => {
    link.classList.remove(active);
  });

  //selects all anchor elements with a 'href' attribute that matches the current page's location hash, and add active class on each link found
  document.querySelectorAll(`a[href="${document.location.hash}"]`).forEach((link) => {
    link.classList.add(active);
  });
};

//used hashchange event to detect if URL has changed.
window.addEventListener("hashchange", handleActiveLink);
