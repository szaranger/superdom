(function() {
  'use strict';

  Dom.prototype.html = function() {
    var result = [];

    this.elements.forEach(function(element) {
      result.push(element.outerHTML);
    });

    return this.callee === 'get' ? result[0] : result;
  };

  Dom.prototype.text = function(text) {
    var result = [];

    if (text) {
      this.elements.forEach(function(element) {
        element.innerText = text;
      });
    } else {
      this.elements.forEach(function(element) {
        result.push(element.innerText);
      });
      return this.callee === 'get' ? result[0] : result;
    }
  };

  Dom.prototype.prepend = function(elements) {
    var parents,
      children,
      fragment,
      temp,
      child;

    if (elements) {
      parents = this.elements;

      parents.forEach(function(parent, i) {
        if (typeof elements === 'string') {
          parent.insertAdjacentHTML('afterbegin', elements);
        } else {
          children = elements.elements;

          children.forEach(function(child) {
            parent.insertAdjacentHTML('afterbegin', child);
          });
        }
      });
    }
  };

})();
