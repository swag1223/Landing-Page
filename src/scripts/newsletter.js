const form = document.querySelector(".newsletter__form");
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

/** Show the error or success message for email validation
 * @function
 * @param {string} msg - The message to show
 * @param {string} [type="error"] - The type of message, either "error" or "success

*/
const handleEmailValidation = (msg, type = "error") => {
  const errorText = document.querySelector(".newsletter__email-field-msg");
  errorText.innerText = msg;
  if (type === "error") {
    errorText.style.display = "inline-block";
    errorText.style.color = "red";
  } else {
    errorText.style.display = "inline-block";
    errorText.style.color = "green";
    email.value = "";
  }
};

//listens to fubmit event on form and Validates the email address and show an error or success message
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value == "") {
    handleEmailValidation("Email is required");
  } else {
    if (isEmailValid(email.value)) {
      handleEmailValidation("Subscribed", "success");
    } else {
      handleEmailValidation("Invalid email");
    }
  }
});
