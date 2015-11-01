(function() {
  'use strict';

  Dom.prototype.ready = function(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };

  Dom.prototype.load = function(handler) {
    if (handler){
      this.elements.forEach(function (element) {
        element.addEventListener('load', handler);
      });
    }
  };

  Dom.prototype.unload = function(handler) {
    if (handler){
      this.elements.forEach(function (element) {
        element.addEventListener('unload', handler);
      });
    }
  };

})();
