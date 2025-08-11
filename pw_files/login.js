const loginController = (function () {
  function init() {
    if (modalController) {
      modalController.init();
    }

    if (dropdownController) {
      dropdownController.createDropdownHandler({
        menuSelector: 'kc-locale-dropdown-menu',
        buttonSelector: 'kc-current-locale-link',
      });
      dropdownController.createDropdownHandler({
        menuSelector: 'bb-support-dropdown-menu',
        buttonSelector: 'bb-support-dropdown-link',
        iconSelector: 'bb-support-dropdown-icon',
        iconClosedClass: 'bb-icon-caret-down',
        iconOpenClass: 'bb-icon-caret-up',
      });
    }

    if (deviceListController) {
      deviceListController.init();
    }

    if (checkDeviceController) {
      checkDeviceController.init();
    }

    if (createPasswordFormController) {
      createPasswordFormController.init();
    }

    if (passwordFieldController) {
      passwordFieldController.init();
    }

    if (otpVerifyController) {
      otpVerifyController.init();
    }

    if (usernameThenPasswordFormController) {
      usernameThenPasswordFormController.init();
    }

    if (passwordResetController) {
      passwordResetController.init();
    }

    if (pseLoginController) {
      pseLoginController.init();
    }

    if (forgotPasswordController) {
      forgotPasswordController.init();
    }
  }

  return {
    init: init,
  };
})();

function loginInit() {
  if (loginController) {
    loginController.init();
  }
}
