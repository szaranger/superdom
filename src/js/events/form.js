(function() {
  'use strict';

  // $('#G').blur(function() { console.log('blur');});
  Dom.prototype.blur = function(handler) {
    bindEvent.call(this, 'blur', handler);
  };

  Dom.prototype.change = function(handler) {
    bindEvent.call(this, 'change', handler);
  };

  Dom.prototype.focus = function(handler) {
    bindEvent.call(this, 'focus', handler);
  };

  Dom.prototype.focusin = function(handler) {
    bindEvent.call(this, 'focusin', handler);
  };

  Dom.prototype.focusout = function(handler) {
    bindEvent.call(this, 'focusout', handler);
  };

  Dom.prototype.select = function(handler) {
    bindEvent.call(this, 'select', handler);
  };

  Dom.prototype.submit = function(handler) {
    bindEvent.call(this, 'submit', handler);
  };
})();
