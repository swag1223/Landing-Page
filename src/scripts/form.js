const newsletterForm = document.querySelector(".newsletter__form");
const newsletterEmailInput = document.querySelector(".newsletter__email-input");
const newsletterErrorText = document.querySelector(".newsletter__email-field-msg");

const footerForm = document.querySelector(".footer__form");
const footerEmailInput = document.querySelector(".footer__email-input");
const footerErrorText = document.querySelector(".footer__email-field-msg");

/** Check if email address is in a valid format
 * @function
 * @param {string} email - The email address to validate
 * @returns {boolean} - Returns true if the email address is in a valid format, otherwise false
 */
const isEmailValid = (email) => {
  const emailFormatRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailFormatRegex.test(String(email).toLowerCase());
};

const emailConfig = {
  empty: {
    message: "Email is required",
    styleClass: "email-field-msg--error",
  },
  invalid: {
    message: "Invalid Email",
    styleClass: "email-field-msg--error",
  },
  valid: {
    message: "Subscribed",
    styleClass: "email-field-msg--success",
  },
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
    // Update error message with the message from emailConfig.empty and toggle its styleClass to true
    errorText.innerText = emailConfig.empty.message;
    errorText.classList.toggle(emailConfig.empty.styleClass, true);
    errorText.classList.toggle(emailConfig.valid.styleClass, false);
    return;
  }

  // Check if email value is valid
  if (isEmailValid(emailValue)) {
    // Update error message with the message from emailConfig.valid and toggle its styleClass to true
    errorText.innerText = emailConfig.valid.message;
    errorText.classList.toggle(emailConfig.valid.styleClass, true);
    errorText.classList.toggle(emailConfig.empty.styleClass, false);

    // Clear the email input value
    emailInput.value = "";
  } else {
    // Update error message with the message from emailConfig.invalid and toggle its styleClass to true
    errorText.innerText = emailConfig.invalid.message;
    errorText.classList.toggle(emailConfig.invalid.styleClass, true);
    errorText.classList.toggle(emailConfig.valid.styleClass, false);
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
