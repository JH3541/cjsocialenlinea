const deviceListController = (function() {
  const buttonId = 'bb-device-dropdown-button';
  const menuId = 'bb-device-dropdown-menu';
  const formId = 'bb-device-list-form';
  const selectedDeviceIconElementId = 'bb-selected-device-icon';
  const selectedDeviceElementId = 'bb-selected-device';
  const selectedDeviceRegisteredElementId = 'bb-selected-device-registered';
  const pushDeviceDropdownDataRole = '[data-role=us-ootb-device-choice__dropdown]';
  const dropdownCaretIconElementId = 'bb-device-dropdown-caret';
  const dropdownIconClosedClass = 'bb-icon-caret-down';
  const dropdownIconOpenClass = 'bb-icon-caret-up';
  const pushDeviceIconDataRole = '[data-role=us-ootb-device-choice__icon]';
  const pushDeviceFriendlyNameDataRole = '[data-role=us-ootb-device-choice__name-and-model]';
  const pushDeviceRegisteredDataRole = '[data-role=us-ootb-device-choice__registered-date]';

  function isPagePresent() {
    return !!(document.getElementById(formId));
  }

  function getDeviceFromElement(device) {
    const deviceId = device.getAttribute('value');
    const displayName = device.textContent.trim();
    return { element: device, deviceId: deviceId, displayName: displayName };
  }

  function updateDeviceOnDom(device) {
    const deviceForm = document.getElementById(formId);
    const selectedDeviceElement = document.getElementById(selectedDeviceElementId);

    const selectedDeviceRegisteredDateElement = document.getElementById(selectedDeviceRegisteredElementId);
    if (selectedDeviceRegisteredDateElement) {
      const selectedDeviceIconElement = document.getElementById(selectedDeviceIconElementId);
      if (selectedDeviceIconElement) {
        selectedDeviceIconElement.classList = getDeviceIcon(device.element).classList;
      }

      selectedDeviceElement.textContent = getDeviceFriendlyNameAndModel(device.element);
      selectedDeviceRegisteredDateElement.textContent = getDeviceRegisteredDate(device.element);
    } else {
      selectedDeviceElement.textContent = device.displayName;
    }

    deviceForm.device.value = device.deviceId;
  }

  function getDeviceIcon(device) {
    return device.querySelector(pushDeviceIconDataRole);
  }

  function getDeviceFriendlyNameAndModel(device) {
    return device.querySelector(pushDeviceFriendlyNameDataRole).innerHTML;
  }

  function getDeviceRegisteredDate(device) {
    return device.querySelector(pushDeviceRegisteredDataRole).innerText;
  }

  function setDevice(device) {
    updateDeviceOnDom(getDeviceFromElement(device));
    document.getElementById(buttonId).focus();
  }

  function onDeviceListKeyUp(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      setDevice(event.target);
    }
  }

  function setDeviceList(devices) {
    const listElement = document.getElementById(menuId);
    for (let i = 0; i < listElement.children.length; i++) {
      const device = listElement.children[i];
      devices.push(getDeviceFromElement(device));
      device.addEventListener('keyup', onDeviceListKeyUp);
    }
  }

  function init() {
    if (!isPagePresent()) {
      return;
    }

    const devices = [];
    if (dropdownController) {
      const dropdownMenuFromDataRole = document.querySelector(pushDeviceDropdownDataRole);
      const dropdownSelector = dropdownMenuFromDataRole ? pushDeviceDropdownDataRole : menuId;
      dropdownController.createDropdownHandler({
        menuSelector: dropdownSelector,
        buttonSelector: buttonId,
        addCloseMenuEvent: true,
        iconSelector: dropdownCaretIconElementId,
        iconOpenClass: dropdownIconOpenClass,
        iconClosedClass: dropdownIconClosedClass,
      });
    }

    setDeviceList(devices);
    if (devices) {
      updateDeviceOnDom(devices[0]);
      document.getElementById(buttonId).focus();
    }
  }

  return {
    init: init,
    setDevice: setDevice,
  }
})();
