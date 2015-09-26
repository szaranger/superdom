(function() {
  'use strict';

  Dom.prototype.children = function() {
    var children = [];

    this.elements.forEach(function(element) {
      children.push(element.children);
    });

    return new Dom(children);
  };

  Dom.prototype.find = function(selector) {
    var result;

    if(selector) {
      result = new Dom(document.querySelectorAll(this.selector + ' ' + selector));
    }

    return result;
  };

  Dom.prototype.next = function() {
    var result = [],
      prefix = this.callee === 'get' ? '#' : '';

    result.push(document.querySelector(prefix + this.selector).nextElementSibling);

    return new Dom(result);
  };

})();
