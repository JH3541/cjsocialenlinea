const pseLoginController = (function () {
  const identifiers = {
    pseLogo: 'pse-logo',
    pseModalBody: 'pse-logout-modal-body',
    pseModalHeader: 'pse-logout-modal-header',
    pseCancelButton: 'pse-cancel-button',
    backButton: 'backToApplication',
    urlZeroLink: 'url-zero-link',
    logoutModalInput: 'pse-modal-input',
  };

  function init() {
    const backButton = document.getElementById(identifiers.backButton);
    const pseModalExists = document.getElementById(identifiers.pseModalHeader);
    if (pseModalExists && backButton && modalController) {
      backButton.onclick = null;
      addModalClickHandler(backButton);
    }
  }

  function addModalClickHandler(element) {
    element.addEventListener('click', () => {
      modalController.showModal(
        identifiers.pseModalHeader,
        identifiers.pseModalBody
      );
    });
  }

  function setZeroUrl(urlZero) {
    sessionStorage.setItem('urlZero', urlZero);
  }

  function openCancelModal() {
    const logoutModalInput = document.getElementById(
      identifiers.logoutModalInput
    );
    if (logoutModalInput) {
      const value = logoutModalInput.value;
      logoutModalInput.setAttribute('value', value.replace('error', 'cancel'));
    }

    modalController.showModal(
      identifiers.pseModalHeader,
      identifiers.pseModalBody
    );
  }

  function retreiveAndAssignZeroUrl() {
    const urlZero = sessionStorage.getItem('urlZero');
    if (urlZero) {
      document
        .getElementById(identifiers.urlZeroLink)
        .setAttribute('href', urlZero);
    }
  }

  return {
    init,
    retreiveAndAssignZeroUrl,
    setZeroUrl,
    openCancelModal,
  };
})();
