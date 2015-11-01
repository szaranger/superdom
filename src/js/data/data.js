(function() {
  'use strict';

  DOM.data = function() {
    var args = Mixin.slice(arguments),
      prefix = 'data-dom-',
      object,
      element,
      key,
      value;

    if (args.length === 3) {
      element = args[0];
      key = args[1];
      value = args[2];

      element.setAttribute(prefix + key, value);
    }

    if (args.length === 2) {
      element = args[0];
      object = args[1];

      Mixin.forEachProperty(object, function(key, value) {
        element.setAttribute(prefix + key, value);
      });
    }

    if (args.length === 1) {
      key = args[0];
      value = prefix + key;
      element = document.querySelector('[' + value + ']');

      return element.getAttribute(value);
    }
  };

})();
