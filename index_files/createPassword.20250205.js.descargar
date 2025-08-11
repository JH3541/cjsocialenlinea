function verifyConsecutiveAlphabetChars(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const reversedAlphabet = alphabet.split("").reverse().join("");

  for (let i = 0; i < alphabet.length - 2; i++) {
    let pattern1 = alphabet.slice(i, i + 3);
    let pattern2 = reversedAlphabet.slice(
      alphabet.length - i - 3,
      alphabet.length - i
    );
    let regex1 = new RegExp(pattern1);
    let regex2 = new RegExp(pattern2);

    if (regex1.test(str) || regex2.test(str)) {
      return true;
    }
  }

  return false;
}

function passwordValidation(password) {
  if (!password || !password.length) {
    return "requiredValidation";
  }

  if (password.length !== 8) {
    return "minimumLengthValidation";
  }

  if (!/^[a-zA-Z0-9]{8}$/.test(password)) {
    return "noSpecialCharactersValidation";
  }

  if (!/[a-zA-Z]/.test(password)) {
    return "stringValidation";
  }

  if (!/\d/.test(password)) {
    return "numberValidation";
  }

  if (password[0] === "0") {
    return "notStartWithZeroValidation";
  }

  if (/\d{3}/.test(password)) {
    let consecutiveNumbers = password.match(/\d{3}/);
    for (const num of consecutiveNumbers) {
      if (
        Math.abs(parseInt(num[0]) - parseInt(num[1])) == 1 &&
        Math.abs(parseInt(num[1]) - parseInt(num[2])) == 1
      ) {
        return "invalidPasswordValidation";
      }
    }
  }

  for (let i = 0; i < password.length - 2; i++) {
    if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
      return "invalidPasswordValidation";
    }
  }

  if (verifyConsecutiveAlphabetChars(password)) {
    return "invalidPasswordValidation";
  }

  return "valid";
}

const createPasswordFormController = (function () {
  const validationIdentifiers = {
    requiredValidation: "bb-identity-password-required",
    stringValidation: "bb-identity-password-string",
    numberValidation: "bb-identity-password-number",
    invalidPasswordValidation: "bb-selfenrollment-identity-password-invalid",
    minimumLengthValidation: "bb-identity-password-minimum-length",
    notStartWithZeroValidation: "bb-identity-password-not-start-with-zero",
    noSpecialCharactersValidation: "bb-identity-password-no-special-characters",
  };
  const identifiers = {
    form: "bb-identity-create-password-form",
    input: "bb-identity-password-input",
    continueButton: "bb-identity-button-continue",
    continueButtonDisabled: "bb-identity-button-continue-disabled",
    ...validationIdentifiers,
  };
  const hiddenClass = "d-none";

  function isPagePresent() {
    return !!document.getElementById(identifiers.form);
  }

  function setupFormValidation() {
    document
      .getElementById(identifiers.form)
      .addEventListener("submit", validateForm);
  }

  function validateForm(event) {
    const input = document.getElementById(identifiers.input);
    cleanFormValidationErrors();

    // The password must not be empty
    const value = input.value;
    const validation = passwordValidation(value);

    if (validation !== "valid") {
      showValidation(identifiers[validation]);
      input.classList.add("was-validated", "is-invalid");
      return event.preventDefault();
    }

    cleanFormValidationErrors();
    input.classList.remove("is-invalid");

    // Set loading button
    hideValidation(identifiers.continueButton);
    showValidation(identifiers.continueButtonDisabled);
  }

  function cleanFormValidationErrors() {
    // Remove all identifier errors
    Object.values(validationIdentifiers).forEach((i) => {
      hideValidation(i);
    });
  }

  function showValidation(id) {
    document.getElementById(id)?.classList.remove(hiddenClass);
  }

  function hideValidation(id) {
    const classes = document.getElementById(id)?.classList;
    if (classes && !classes.contains(hiddenClass)) {
      classes.add(hiddenClass);
    }
  }

  function init() {
    if (isPagePresent()) {
      setupFormValidation();
    }
  }

  function onInput() {
    hideValidation(identifiers.requiredValidation);
  }

  return {
    init: init,
    onInput: onInput,
  };
})();
