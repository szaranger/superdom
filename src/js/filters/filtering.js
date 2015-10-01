(function() {
  'use strict';

  Dom.prototype.first = function() {
    var elements = this.elements,
      element = elements ? elements[0] : this[0];

    return new Dom([element]);
  };

  Dom.prototype.last = function() {
    var elements = this.elements,
      element = elements ?
        elements[this.elements.length - 1] : this[this.length - 1];

    return new Dom([element]);
  };

})();
