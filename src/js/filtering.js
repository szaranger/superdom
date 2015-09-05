(function() {
  'use strict';

  Dom.prototype.first = function() {
    return this[0];
  };

  Dom.prototype.last = function() {
    return this[this.elements.length - 1];
  };
  
})();
