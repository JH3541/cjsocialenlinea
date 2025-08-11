const passwordResetController = (function () {
  const identifiers = {
    wrapper: "kc-passwd-update-form",
    submitButton: "password-submit",
    errorLabel: "password-error-label",
    passwordInput: "password-new",
    passwordConfirmInput: "password-confirm",
  };

  function isPagePresent() {
    return !!document.getElementById(identifiers.wrapper);
  }

  function passwordInputKeyupHandler(event) {
    const error = validatePasswordFormatError(event.target.value);
    if (error) {
      document
        .getElementById(identifiers.submitButton)
        .setAttribute("disabled", true);
    } else {
      document
        .getElementById(identifiers.submitButton)
        .removeAttribute("disabled");
      document.getElementById("password-confirm").value = event.target.value;
    }
    document.getElementById(identifiers.errorLabel).innerHTML = error;
  }

  function hasConsecutiveEqualCharacters(str) {
    for (let i = 0; i <= str.length - 4; i++) {
      if (
        str[i] === str[i + 1] &&
        str[i] === str[i + 2] &&
        str[i] === str[i + 3]
      ) {
        return true;
      }
    }
    return false;
  }

  function hasConsecutiveAscendingCharacters(str) {
    for (let i = 0; i <= str.length - 4; i++) {
      if (
        str.charCodeAt(i) === str.charCodeAt(i + 1) - 1 &&
        str.charCodeAt(i) === str.charCodeAt(i + 2) - 2 &&
        str.charCodeAt(i) === str.charCodeAt(i + 3) - 3
      ) {
        return true;
      }
    }
    return false;
  }

  function hasConsecutiveDescendingCharacters(str) {
    for (let i = 0; i <= str.length - 4; i++) {
      if (
        str.charCodeAt(i) === str.charCodeAt(i + 1) + 1 &&
        str.charCodeAt(i) === str.charCodeAt(i + 2) + 2 &&
        str.charCodeAt(i) === str.charCodeAt(i + 3) + 3
      ) {
        return true;
      }
    }
    return false;
  }

  function validatePasswordFormatError(value) {
    if (!value.length) {
      return null;
    }

    if (value.length === 0) {
      return "Campo requerido";
    } else if (value.length !== 8) {
      return "Debe tener 8 caracteres";
    } else if (/^\D+$/.test(value)) {
      return "Debe incluir al menos un número";
    } else if (/^[^a-zA-Z]*$/.test(value)) {
      return "Debe incluir al menos una letra";
    } else if (value.startsWith(0)) {
      return "No puede iniciar con 0";
    } else if (/[^a-zA-Z0-9]/.test(value)) {
      return "No ingrese ñ, tildes, espacios, comas, puntos o caracteres especiales";
    } else if (
      hasConsecutiveEqualCharacters(value) ||
      hasConsecutiveAscendingCharacters(value) ||
      hasConsecutiveDescendingCharacters(value)
    ) {
      return "Por favor intente de nuevo. Esta contraseña no cumple con los parámetros establecidos.";
    }
    return null;
  }

  function init() {
    if (!isPagePresent()) {
      return;
    }

    const button = document.getElementById("bb-support-dropdown-link");
    if (button) {
      const span = button.getElementsByTagName("span")[0];
      if (span) {
        span.innerHTML = span.getAttribute("data-innerhtml");
      }
    }

    const alert = document.querySelector(".alert-warning");
    if (alert) {
      alert.remove();
    }

    document
      .getElementById(identifiers.passwordInput)
      .addEventListener("keyup", passwordInputKeyupHandler);
  }

  return {
    init: init,
  };
})();
