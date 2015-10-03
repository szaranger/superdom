(function() {
  'use strict';

  Dom.prototype.add = function(selector) {
    var result = [],
      newElement;

    this.elements.forEach(function(element) {
      newElement = document.createElement(selector);
      result.push(element.append(newElement));
    });

    return new Dom([newElement]);
  };

 // TODO: Pseudo classes
  Dom.prototype.not = function(selector) {
    var result = [];

    this.elements.forEach(function(element) {
      if(element.parentNode.querySelector(selector) !== element) {
        result.push(element);
      }
    });

    return new Dom(result);
  };

})();
