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
    textColor: "red",
  },
  invalid: {
    message: "Invalid Email",
    textColor: "red",
  },
  valid: {
    message: "Subscribed",
    textColor: "green",
  },
};

/** Handles email validation and displays error messages.
 * @param {string} emailValue - The value of the email input field.
 */
const handleEmailValidation = (emailValue) => {
  const errorText = document.querySelector(".newsletter__email-field-msg");
  errorText.style.display = "flex";

  if (emailValue === "") {
    errorText.innerText = emailConfig.empty.message;
    errorText.style.color = emailConfig.empty.textColor;
    return;
  }

  if (isEmailValid(emailValue)) {
    errorText.innerText = emailConfig.valid.message;
    errorText.style.color = emailConfig.valid.textColor;
  } else {
    errorText.innerText = emailConfig.invalid.message;
    console.log(emailValue);
    errorText.style.color = emailConfig.invalid.textColor;
  }
};

//listens to submit event on newsletterForm and Validates the email address and show an error or success message
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleEmailValidation(email.value.trim());
});
