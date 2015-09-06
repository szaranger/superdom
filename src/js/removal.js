(function() {
  'use strict';

  Dom.prototype.empty = function() {
    this.elements.forEach(function(element) {
      element.outerHTML = null;
    });
  };

  Dom.prototype.remove = function() {
    this.elements.forEach(function(element) {
      element.parentNode.removeChild(element);
    });
  };

  Dom.prototype.detach = function() {
    var elements = [];

    this.elements.forEach(function(element) {
      elements.push(element);
      element.parentNode.removeChild(element);
    });

    return elements;
  };

  Dom.prototype.unwrap = function() {
    var parent;

    this.elements.forEach(function(element) {
      parent = element.parentNode;
      parent.outerHTML = element.outerHTML;
    });
  };

})();
