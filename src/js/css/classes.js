(function() {
  'use strict';

  Dom.prototype.hasClass = function(className) {
    return this.elements.some(function(element) {
      return element.classList.contains(className);
    });
  };

  Dom.prototype.addClass = function(className) {
    if (className && this.elements[0]) {
      this.elements.forEach(function(element) {
        element.classList.add(className);
      });
    }
    return new Dom(this.elements);
  };

  Dom.prototype.removeClass = function(className) {
    if (this.elements[0]) {
      this.elements.forEach(function(element) {
        if (className) {
          element.classList.remove(className);
        } else {
          element.classList.remove();
        }
      });
    }
    return new Dom(this.elements);
  };

})();
