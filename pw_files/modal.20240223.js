const modalController = (function () {
  const modalId = 'bb-modal';
  const headerId = 'bb-modal-header';
  const bodyId = 'bb-modal-body';

  function hideModal() {
    document.getElementById(headerId).innerHTML = '';
    document.getElementById(bodyId).innerHTML = '';
    document.getElementById(modalId).hidden = true;
  }

  function init() {
    hideModal();
  }

  function showModal(headerImplantId, bodyImplantId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      document.getElementById(headerId).innerHTML = document.getElementById(headerImplantId).innerHTML;
      document.getElementById(bodyId).innerHTML = document.getElementById(bodyImplantId).innerHTML;
      modal.hidden = false;

      const buttons = modal.getElementsByTagName('button');
      if (buttons && buttons[0]) {
        buttons[0].focus();
      }
    }
  }

  return {
    init: init,
    showModal: showModal,
    hideModal: hideModal,
  };
})()
