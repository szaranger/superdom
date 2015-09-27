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

    if (selector) {
      result = new Dom(document.querySelectorAll(this.selector + ' ' + selector));
    }

    return result;
  };

  Dom.prototype.next = function(selector) {
    return getElementSibling.call(this, 'next', selector);
  };

  Dom.prototype.prev = function(selector) {
    return getElementSibling.call(this, 'prev', selector);
  };

  function getElementSibling(position, filter) {
    var result = [],
      position = position || 'next',
      prefix = this.callee === 'get' ? '#' : '',
      selector = document.querySelector(prefix + this.selector),
      sibling;

    sibling = position === 'next' ?
      selector.nextElementSibling : selector.previousElementSibling;

    if (sibling) {
      sibling = filter ?
        (sibling.outerHTML.indexOf(filter) > -1 ? sibling : undefined) : sibling;
      result.push(sibling);
    }

    return new Dom(result);
  }

})();
