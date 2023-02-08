const newsletterForm = document.querySelector(".newsletter__form");
const email = document.querySelector(".newsletter__email-input");
const emailWrapper = document.querySelector(".newsletter__email-wrapper");

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
    styleClass: "newsletter__email-field-msg--error",
  },
  invalid: {
    message: "Invalid Email",
    styleClass: "newsletter__email-field-msg--error",
  },
  valid: {
    message: "Subscribed",
    styleClass: "newsletter__email-field-msg--success",
  },
};

/** Handles email validation and displays error messages.
 * @param {string} emailValue - The value of the email input field.
 */
const handleEmailValidation = (emailValue) => {
  const errorText = document.querySelector(".newsletter__email-field-msg");

  if (emailValue === "") {
    errorText.innerText = emailConfig.empty.message;
    if(errorText.classList.contains(`${emailConfig.valid.styleClass}`)) {
      errorText.classList.remove(`${emailConfig.valid.styleClass}`);
    }
    errorText.classList.add(emailConfig.empty.styleClass);
    return;
  }

  if (isEmailValid(emailValue)) {
    errorText.innerText = emailConfig.valid.message;
    if(errorText.classList.contains(`${emailConfig.empty.styleClass}`)) {
      errorText.classList.remove(`${emailConfig.empty.styleClass}`);
    }
    errorText.classList.add(emailConfig.valid.styleClass);
    email.value="";
  } else {
    errorText.innerText = emailConfig.invalid.message;
    if(errorText.classList.contains(`${emailConfig.valid.styleClass}`)) {
      errorText.classList.remove(`${emailConfig.valid.styleClass}`);
    }
    errorText.classList.add(emailConfig.invalid.styleClass);
  }
};

//listens to submit event on newsletterForm and Validates the email address and show an error or success message
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleEmailValidation(email.value.trim());
});
