(function() {
  'use strict';

  Dom.prototype.pushStack = function(elements) {

    if(elements) {
      elements.forEach(function(element) {
        this.elements.push(element);
      }.bind(this));
    }

    return new Dom(this.elements);
  };

})();
