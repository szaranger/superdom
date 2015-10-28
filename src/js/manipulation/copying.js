(function() {
  'use strict';

  Dom.prototype.clone = function () {
    var elements = [];

    this.elements.forEach(function(element) {
      elements.push(element.cloneNode(true));
    });

    return new Dom(elements);
  };

})();
