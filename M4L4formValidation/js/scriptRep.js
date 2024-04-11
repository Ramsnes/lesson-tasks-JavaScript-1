const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("button");

/**
 * Enables the submit button if all form input validations pass.
 *
 * This function checks the validity of the first name, last name, and email
 * fields in a form. If all fields meet the validation criteria (minimum length
 * for names and valid email format), the submit button is enabled. Otherwise,
 * the button remains disabled.
 *
 * @returns {void} (doesn't return a value, modifies button state)
 */

function enableButtonOnValidation() {
  if (
    checkLength(firstName.value, 1) &&
    checkLength(lastName.value, 4) &&
    validateEmail(email.value)
  ) {
    button.disabled = false;
  } else {
    message.innerHTML = "";
    button.disabled = true;
  }
}

// checks if all inputs are fille when pressing each input field
// keyup = when key is released
firstName.addEventListener("keyup", enableButtonOnValidation);
lastName.addEventListener("keyup", enableButtonOnValidation);
email.addEventListener("keyup", enableButtonOnValidation);

/**
 * Handles form submission and displays a success message.
 *
 * This function is triggered when the form is submitted. It prevents the default
 * form submission behavior, displays a success message
 * in the `message` element, and resets the form to its initial state (`form.reset()`).
 *
 * @param {Event} event The submit event object triggered on form submission.
 * @returns {void} (doesn't return a value)
 */
function submitForm(event) {
  event.preventDefault();

  message.innerHTML = `<div class ="message">
      Your message has been sent</div>`;

  form.reset();
}

form.addEventListener("submit", submitForm);

/**
  * Checks if the length of a string meets a minimum length requirement.
  * 
  * This function takes a string `value` and a minimum length requirement `len` as arguments. It returns `true` if the trimmed length of the string (removing leading and trailing whitespace) is greater than or equal to the minimum length, otherwise it returns `false`.

 * @param {string} value The string value to check the length of.
 * @param {number} len The minimum required length for the string.
 * @returns True if the string length meets the minimum requirement
 */
function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

/**
 * Validates an email address format using a regular expression.
 *
 * This function takes an email address `email` as a string argument. It uses a regular expression (`/\S+@\S+\.\S+/)`) to check if the email format is valid. The function returns `true` if the email matches the regular expression pattern, indicating a potentially valid email address, otherwise it returns `false`.
 *
 * @param {string} email The email address string to validate.
 * @returns {boolean} True if the email format matches the regular expression, False otherwise.
 */
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
