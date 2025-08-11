const forgotPasswordController = (function () {
  const identifiers = {
    input: 'username',
    submitButton: 'forgot-password-submit',
    errorLabel: 'password-error-label',
    usernameErrorLabel: 'username-error-forgot-password',
  };

  function init() {
    const usernameRegex = /(CC|CE|NI|TI|PE|PT)\d+$/i;
    const hiddenClass = 'd-none';
    const input = document.getElementById(identifiers.input);
    const button = document.getElementById(identifiers.submitButton);
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
  }

  return {
    init: init,
  };
})();
