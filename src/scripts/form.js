import { EMAIL_FORMAT_REGEX, EMAIL_CONFIG } from "./constants";

const newsletterForm = document.querySelector(".js-newsletter-form");
const newsletterEmailInput = document.querySelector(".js-newsletter-email-input");
const newsletterErrorText = document.querySelector(".js-newsletter-email-field-msg");

const footerForm = document.querySelector(".js-footer-form");
const footerEmailInput = document.querySelector(".js-footer-email-input");
const footerErrorText = document.querySelector(".js-footer-email-field-msg");

/** Check if email address is in a valid format
 * @function
 * @param {string} email - The email address to validate
 * @returns {boolean} - Returns true if the email address is in a valid format, otherwise false
 */
const isEmailValid = (email) => {
  return EMAIL_FORMAT_REGEX.test(String(email).toLowerCase());
};

/**
 * Handles email validation and updates the error message and styling accordingly.
 * @param {string} emailValue - The email value entered by the user.
 * @param {HTMLElement} errorText - The element to display the error message.
 * @param {HTMLElement} emailInput - The active email input element.
 */
const handleEmailValidation = (emailValue, errorText, emailInput) => {
  // Check if email value is empty
  if (emailValue === "") {
    // Update error message with the message from EMAIL_CONFIG.empty and toggle its styleClass to true
    errorText.innerText = EMAIL_CONFIG.empty.message;
    errorText.classList.toggle(EMAIL_CONFIG.empty.styleClass, true);
    errorText.classList.toggle(EMAIL_CONFIG.valid.styleClass, false);
    return;
  }

  // Check if email value is valid
  if (isEmailValid(emailValue)) {
    // Update error message with the message from emailConfig.valid and toggle its styleClass to true
    errorText.innerText = EMAIL_CONFIG.valid.message;
    errorText.classList.toggle(EMAIL_CONFIG.valid.styleClass, true);
    errorText.classList.toggle(EMAIL_CONFIG.empty.styleClass, false);

    // Clear the email input value
    emailInput.value = "";
  } else {
    // Update error message with the message from emailConfig.invalid and toggle its styleClass to true
    errorText.innerText = EMAIL_CONFIG.invalid.message;
    errorText.classList.toggle(EMAIL_CONFIG.invalid.styleClass, true);
    errorText.classList.toggle(EMAIL_CONFIG.valid.styleClass, false);
  }
};

//listens to submit event on newsletterForm and Validates the email address and show an error or success message
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleEmailValidation(
    newsletterEmailInput.value.trim(),
    newsletterErrorText,
    newsletterEmailInput
  );
});

//listens to submit event on footerForm and Validates the email address and show an error or success message
footerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleEmailValidation(footerEmailInput.value.trim(), footerErrorText, footerEmailInput);
});
