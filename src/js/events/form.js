(function() {
  'use strict';

  // $('#G').blur(function() { console.log('blur');});
  Dom.prototype.blur = function(handler) {
    bind.call(this, 'blur', handler);
  };

  Dom.prototype.change = function(handler) {
    bind.call(this, 'change', handler);
  };

  Dom.prototype.focus = function(handler) {
    bind.call(this, 'focus', handler);
  };

  Dom.prototype.focusin = function(handler) {
    bind.call(this, 'focusin', handler);
  };

  Dom.prototype.focusout = function(handler) {
    bind.call(this, 'focusout', handler);
  };

  Dom.prototype.select = function(handler) {
    bind.call(this, 'select', handler);
  };

  Dom.prototype.submit = function(handler) {
    bind.call(this, 'submit', handler);
  };

  function bind(eventName, handler) {
    var handler = handler || Mixin.emptyFn;

    this.elements.forEach(function (element) {
      element.addEventListener(eventName, handler, false);
    });
  }

})();
