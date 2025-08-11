const pseLandingController = (function () {
  const identifiers = {
    pseLogo: 'pse-logo',
    pseModalBody: 'pse-error-modal-body',
    pseModalHeader: 'pse-error-modal-header',
    pseErrorLogoutButton: 'pse-error-modal-logout-button',
  };

  function showErrorModal() {
    modalController.showModal(
      identifiers.pseModalHeader,
      identifiers.pseModalBody
    );

    setTimeout(function () {
      document.getElementById(identifiers.pseErrorLogoutButton).click();
    }, 300000);
  }

  return {
    showErrorModal,
  };
})();
