const dropdownController = (function() {
  const showClass = 'show';
  /**
   * Dropdown handler configuration
   * @typedef {Object} DropdownHandlerConfig
   * @property {string} menuSelector - the selector for the dropdown menu
   * @property {string} buttonSelector - the selector for the dropdown button
   * @property {string} iconSelector - the selector for the icon displayed on the dropdown button
   * @property {string} iconOpenClass - the class name for the icon when the menu is open
   * @property {string} iconClosedClass - the class name for the icon when the menu is closed
   * @property {boolean} addCloseMenuEvent - whether the menu closes when an item is selected, useful when the links do not redirect
   */

  /**
   * Creates support for opening and closing a dropdown
   * @param {DropdownHandlerConfig} config - configuration for the dropdown handler
   *
   * @deprecated Please use DropdownHandlerConfig format for properties.
   * @param {string} config - the selector for the dropdown menu
   * @param {string} buttonSelector - the selector for the dropdown button
   * @param {boolean} addCloseMenuEvent - whether the menu closes when an item is selected, useful when the links do not redirect
   */
  function createDropdownHandler(config, buttonSelector, addCloseMenuEvent) {
    let menu;
    let button;
    let icon;
    let hasCloseMenuEvent;
    let isOpenEvent = false;

    if (typeof config === 'string') {
      menu = document.getElementById(config);
      button = document.getElementById(buttonSelector);
      hasCloseMenuEvent = addCloseMenuEvent;
    } else {
      menu = document.getElementById(config.menuSelector) || document.querySelector(config.menuSelector);
      button = document.getElementById(config.buttonSelector);
      icon = document.getElementById(config.iconSelector);
      hasCloseMenuEvent = config.addCloseMenuEvent;
    }
  
    if (button) {
      // Open and close on button click
      button.addEventListener('click', function() {
        menu.classList.toggle(showClass);
        toggleIconState(icon, config);

        if (menu.classList.contains(showClass)) {
          isOpenEvent = true;
        }
      });

      // open and close on enter/space keyup
      button.addEventListener('keyup', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
          menu.classList.toggle(showClass);
          toggleIconState(icon, config);

          if (menu.classList.contains(showClass)) {
            isOpenEvent = true;
          }
        }
      });
  
      // Close on click outside of dropdown menu
      window.addEventListener('click', function(event) {
        if (targetIsNotDropdownOperation(menu, event.target, isOpenEvent)) {
          menu.classList.remove(showClass);
          toggleIconState(icon, config);
        }
        isOpenEvent = false;
      });
  
      if (hasCloseMenuEvent) {
        menu.addEventListener('click', function() {
          menu.classList.remove(showClass);
          toggleIconState(icon, config);
        });
        menu.addEventListener('keyup', function(event) {
          if ((event.key === 'Enter' || event.key === ' ')) {
            menu.classList.remove(showClass);
            toggleIconState(icon, config);
          }
        });
      }
    }
  }

  function targetIsNotDropdownOperation(menu, target, isOpenEvent) {
    return !isOpenEvent &&
      menu.classList.contains(showClass) &&
      target !== menu &&
      target.parentNode !== menu;
  }

  function toggleIconState(icon, config) {
    if (icon) {
      icon.classList.toggle(config.iconOpenClass);
      icon.classList.toggle(config.iconClosedClass);
    }
  }

  return {
    createDropdownHandler: createDropdownHandler,
  }
})()
