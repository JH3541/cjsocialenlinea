var challengeFpController = function () {
  var fieldsIds = {
    form: "challenge-reset-password-form",
    button: "reset-password-button",
    productType: "reset-password-product-type",
    lastDigitsWrap: "reset-password-last-6-digits-wrap",
    lastDigitsInput: "reset-password-last-6-digits",
    lastDigitsLabel: "reset-password-last-6-digits-label",
    lastDigitsHelperText: "reset-password-last6-digits-helpertext",
    lastDigitsError: "reset-password-last-6-digits-error",
    lastDigitsRequiredError: "reset-password-last6-required-field",
    cardPasswordWrap: "bb-input-password",
    cardPasswordInput: "reset-password-card-pass",
    cardPasswordLabel: "reset-password-card-pass-label",
    cardPasswordHelperText: "reset-password-card-pass-helpertext",
    cardPasswordErrorWrapper: "reset-password-card-pass-err-wrapper",
    cardPassError: "reset-pass-card-pass-err-error",
    cardPassRequiredError: "reset-password-card-pass-required-field",
  };

  var form = document.getElementById(fieldsIds.form);
  if (!form) return null;
  var button = document.getElementById(fieldsIds.button);
  var productType = document.getElementById(fieldsIds.productType);
  var lastDigitsWrap = document.getElementById(fieldsIds.lastDigitsWrap);
  var lastDigitsInput = document.getElementById(fieldsIds.lastDigitsInput);
  var lastDigitsLabel = document.getElementById(fieldsIds.lastDigitsLabel);
  var lastDigitsHelperText = document.getElementById(
    fieldsIds.lastDigitsHelperText
  );
  var lastDigitsError = document.getElementById(fieldsIds.lastDigitsError);
  var lastDigitsRequiredError = document.getElementById(
    fieldsIds.lastDigitsRequiredError
  );
  var cardPasswordWrap = document.getElementById(fieldsIds.cardPasswordWrap);
  var cardPasswordInput = document.getElementById(fieldsIds.cardPasswordInput);
  var cardPasswordLabel = document.getElementById(fieldsIds.cardPasswordLabel);
  var cardPasswordHelperText = document.getElementById(
    fieldsIds.cardPasswordHelperText
  );
  var cardPasswordErrorWrapper = document.getElementById(
    fieldsIds.cardPasswordErrorWrapper
  );
  var cardPassError = document.getElementById(fieldsIds.cardPassError);
  var cardPassRequiredError = document.getElementById(
    fieldsIds.cardPassRequiredError
  );

  function changeLabelsByProductType(type) {
    lastDigitsLabel.innerText = lastDigitsLabel.getAttribute(
      "data-" + type + "-label"
    );
    cardPasswordLabel.innerText = cardPasswordLabel.getAttribute(
      "data-" + type + "-label"
    );
  }

  function changeHelpersByProductType(type) {
    lastDigitsHelperText.innerText = lastDigitsHelperText.getAttribute(
      "data-" + type + "-text"
    );
    cardPasswordHelperText.innerText = cardPasswordHelperText.getAttribute(
      "data-" + type + "-text"
    );
  }

  function changePlaceholdersByProductType(type) {
    cardPasswordInput.setAttribute(
      "placeholder",
      cardPasswordInput.getAttribute("data-" + type + "-placeholder")
    );
  }

  function last6DigitsIsValid() {
    return lastDigitsInput.value.length === 6;
  }

  function cardPasswordIsValid() {
    var type = productType.value;
    if (type === "debit") {
      return cardPasswordInput.value.length === 4;
    } else if (type === "credit") {
      return cardPasswordInput.value.length === 3;
    }
    return false;
  }

  function resetLastDigitsValidation() {
    lastDigitsError.classList.add("d-none");
    lastDigitsInput.classList.remove("is-invalid", "was-validated");
    lastDigitsRequiredError.classList.add("d-none");
  }

  function resetCardPasswordValidation() {
    cardPassError.classList.add("d-none");
    cardPasswordInput.classList.remove("is-invalid", "was-validated");
    cardPassRequiredError.classList.add("d-none");
  }

  lastDigitsInput.addEventListener("input", resetLastDigitsValidation);
  cardPasswordInput.addEventListener("input", resetCardPasswordValidation);

  productType.addEventListener("change", function (ev) {
    var type = ev.target.value;
    button.removeAttribute("disabled");
    lastDigitsWrap.classList.remove("d-none");
    cardPasswordWrap.classList.remove("d-none");
    resetLastDigitsValidation();
    resetCardPasswordValidation();
    changeLabelsByProductType(type);
    changeHelpersByProductType(type);
    changePlaceholdersByProductType(type);
  });

  form.addEventListener("submit", function (ev) {
    resetLastDigitsValidation();
    resetCardPasswordValidation();
    var hasError = false;
    var productTypeValue = productType.value;

    if (productTypeValue === "") {
      ev.preventDefault();
      return false;
    }

    if (lastDigitsInput.value === "") {
      lastDigitsInput.classList.add("is-invalid", "was-validated");
      lastDigitsRequiredError.classList.remove("d-none");
      hasError = true;
    } else if (!last6DigitsIsValid()) {
      lastDigitsError.classList.remove("d-none");
      lastDigitsInput.classList.add("is-invalid", "was-validated");
      hasError = true;
    }

    if (cardPasswordInput.value === "") {
      cardPasswordInput.classList.add("is-invalid", "was-validated");
      cardPassRequiredError.classList.remove("d-none");
      hasError = true;
    } else if (!cardPasswordIsValid()) {
      cardPassError.innerText = cardPasswordErrorWrapper.getAttribute(
        "data-" + productTypeValue + "-error"
      );
      cardPasswordInput.classList.add("is-invalid", "was-validated");
      cardPassError.classList.remove("d-none");
      hasError = true;
    }

    if (hasError) {
      ev.preventDefault();
      return false;
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  challengeFpController();
});
