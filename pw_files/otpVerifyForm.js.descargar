var otpVerifyController = (function() {
  var identifiers = {
    form: 'kc-verify-otp-form',
    input: 'bb-otp-field',
    resendTimeElement: 'bb-otp-resend-element',
    currentResendTime: 'bb-otp-resend-time',
    resendButton: 'bb-otp-resend-button',
    otpLengthInvalid: 'bb-otp-length-invalid',
    codeInvalid: 'bb-otp-code-invalid',
    codeExpired: 'bb-otp-code-expired'
  };

  let currentInterval;
  let targetTime;
  let pageData;
  const hiddenClass = 'd-none';

  function isPagePresent() {
    return !!(document.getElementById(identifiers.form));
  }

  function hasCountdown() {
    return !!(document.getElementById(identifiers.currentResendTime));
  }

  function setCountdownTime(time) {
    document.getElementById(identifiers.currentResendTime).innerText = time;
  }

  function getRemainingTime() {
    return Math.round((targetTime - new Date().getTime()) / 1000);
  }

  function updateCountdown() {
    const remainingTime = getRemainingTime();
    setCountdownTime(remainingTime);
    if (remainingTime <= 0) {
      document.getElementById(identifiers.resendTimeElement).hidden = true;
      document.getElementById(identifiers.resendButton).disabled = false;
      return clearInterval(currentInterval);
    }
  }

  function validateForm(event) {
    const otpField = document.getElementById(identifiers.input);
    if (otpField.value.length !== pageData.requiredOtpLength) {
      showValidation(identifiers.otpLengthInvalid);
      otpField.classList.add('was-validated', 'is-invalid');
      return event.preventDefault();
    }

    hideValidation(identifiers.otpLengthInvalid);
    otpField.classList.remove('is-invalid');
  }

  function initCountdown() {
    if (!pageData.nextResendSeconds) {
      return;
    }

    setCountdownTime(pageData.nextResendSeconds);
    targetTime = new Date().getTime() + pageData.nextResendSeconds * 1000;
    currentInterval = setInterval(updateCountdown, 1000);
  }

  function initForm() {
    document
      .getElementById(identifiers.form)
      .addEventListener("submit", validateForm);
  }

  function init() {
    if (!isPagePresent()) {
      return;
    }

    pageData = otpVerifyPageData;

    if (hasCountdown()) {
      initCountdown();
    }

    initForm();
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

  function onOtpInput(input) {
    if (input.value.length > pageData.requiredOtpLength) {
      input.value = input.value.substr(0, pageData.requiredOtpLength);
    }

    hideValidation(identifiers.otpLengthInvalid);
    hideValidation(identifiers.codeExpired);
    hideValidation(identifiers.codeInvalid);
  }

  return {
    init: init,
    onOtpInput: onOtpInput
  };
}());
