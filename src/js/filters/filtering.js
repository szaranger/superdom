(function() {
  'use strict';

  Dom.prototype.first = function() {
    var elements = this.elements;

    return elements ? elements[0][0] : this[0][0];
  };

  Dom.prototype.last = function() {
    var elements = this.elements;

    return elements ? elements[this.elements.length - 1] : this[this.length - 1];
  };

})();
