const usernameThenPasswordFormController = (function () {
  const identifiers = {
    form: 'bb-username-then-password-form',
    input: 'bb-username-then-password-input',
    requiredValidation: 'bb-username-then-password-input-required',
    loginButton: 'username_then_password_btn',
    nextButton: 'kc-form-buttons',
    usernameErrorLabel: 'username-error-usernamethenpassword',
    passwordErrorLabel: 'password-error-usernamethenpassword',
    passwordInput: 'bb-username-then-password-input',
  };
  const hiddenClass = 'd-none';
  const usernameRegex = /(CC|CE|NI|TI|PE|PT)\d+$/i;

  function isPagePresent() {
    return !!document.getElementById(identifiers.form);
  }

  function setupFormValidation() {
    document
      .getElementById(identifiers.form)
      .addEventListener('submit', validateForm);
  }

  function validateForm(event) {
    const input = document.getElementById(identifiers.input);
    if (!input.value || !input.value.length) {
      showValidation(identifiers.requiredValidation);
      input.classList.add('was-validated', 'is-invalid');
      return event.preventDefault();
    }

    hideValidation(identifiers.requiredValidation);
    input.classList.remove('is-invalid');
  }

  function showValidation(id) {
    document.getElementById(id).classList.remove(hiddenClass);
  }

  function hideValidation(id) {
    const classes = document.getElementById(id).classList;
    if (!classes.contains(hiddenClass)) {
      classes.add(hiddenClass);
    }
  }

  function init() {
    const loginBtn = document.getElementsByClassName(
      identifiers.loginButton
    )[0];
    if (loginBtn) {
      loginBtn.disabled = true;
      if (isPagePresent()) {
        setupFormValidation();
      }
    }

    const input = document.getElementById(identifiers.input);
    const button = document.getElementById(identifiers.nextButton);
    const errorMessageLbl = document.getElementById(
      identifiers.usernameErrorLabel
    );

    if (input && button && errorMessageLbl) {
      input.addEventListener('keyup', () => {
        if (input.value.length > 2) {
          if (usernameRegex.test(input.value)) {
            button.disabled = false;
            errorMessageLbl.classList.add(hiddenClass);
          } else {
            button.disabled = true;
            errorMessageLbl.classList.remove(hiddenClass);
          }
        }
      });
    }

    const passwordField = document.getElementById(identifiers.passwordInput);
    const passwordErrorMessageLbl = document.getElementById(
      identifiers.passwordErrorLabel
    );
    if (passwordField && passwordErrorMessageLbl && button) {
      passwordField.addEventListener('keyup', () => {
        if (passwordField.value.trim().length == 8) {
          button.disabled = false;
          passwordErrorMessageLbl.classList.add(hiddenClass);
        } else {
          button.disabled = true;
          passwordErrorMessageLbl.classList.remove(hiddenClass);
        }
      });
    }
  }

  function onInput(input) {
    hideValidation(identifiers.requiredValidation);
  }

  return {
    init: init,
    onInput: onInput,
  };
})();
