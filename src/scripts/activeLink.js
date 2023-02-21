const active = "active-link";

/** //selects all anchor elements with a 'href' attribute that matches the current page's location hash,
 * and add active class on each link found
 * @function
 * @param {string} hash - The current page's location hash
 */
const addActiveStateToLink = (hash) => {
  document.querySelectorAll(hash).forEach((link) => {
    link.classList.add(active);
  });
};

/** Handles the active link in the navigation. */
const handleActiveLink = () => {
  // Select the currently active links and remove the active class.
  const activeLinks = document.querySelectorAll(`.${active}`);
  activeLinks.forEach((link) => {
    link.classList.remove(active);
  });

  addActiveStateToLink(`a[href="${document.location.hash}"]`);
};

//used hashchange event to detect if URL has changed.
window.addEventListener("hashchange", handleActiveLink);

//used readystatechange event to keep the state of active link preserved on pg reload
document.addEventListener("readystatechange", () => {
  addActiveStateToLink(`a[href="${document.location.hash}"]`);
});
