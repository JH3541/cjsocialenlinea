const passwordFieldController = (function() {
  const identifiers = {
    passwordWrapper: 'bb-input-password',
    toggleVisibilityButton: 'bb-toggle-password-visibility-button',
    toggleVisibilityIcon: 'bb-toggle-password-visibility-icon'

  };
  const inputHiddenType = 'password';
  const inputVisibleType = 'text';
  const iconVisibleClass = 'bb-icon-visibility';
  const iconInvisibleClass = 'bb-icon-visibility-off';
  const passwordFieldClass = 'bb-input-password__input';

  function isPagePresent() {
    return !!(document.getElementById(identifiers.passwordWrapper));
  }

  function hasToggleVisibilityButton() {
    return !!(document.getElementById(identifiers.toggleVisibilityButton));
  }

  function togglePasswordVisibility(input, icon) {
    const isHidden = input.getAttribute('type') === inputHiddenType;
    input.setAttribute('type', isHidden ? inputVisibleType: inputHiddenType);
    icon.classList.toggle(iconVisibleClass);
    icon.classList.toggle(iconInvisibleClass);
  }

  function setToggleVisibilityListener() {
    const trigger = document.getElementById(identifiers.toggleVisibilityButton);
    const inputs = document.getElementsByClassName(passwordFieldClass);
    const icon = document.getElementById(identifiers.toggleVisibilityIcon);

    if (inputs && inputs[0] && trigger) {
      trigger.onclick = function() {
        togglePasswordVisibility(inputs[0], icon);
      };
    }
  }

  function init() {
    if (!isPagePresent()) {
      return;
    }

    if (hasToggleVisibilityButton()) {
      setToggleVisibilityListener();
    }
  }

  return {
    init: init,
  }
})();
