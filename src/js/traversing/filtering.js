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

  Dom.prototype.eq = function(index) {
    var offset;

    if (index) {
      offset = index < 0 ? this.elements.length : 0;
      return new Dom([this.elements[offset + index]]);
    }
  };

  Dom.prototype.map = function(callback) {
    if (callback) {
      this.elements.map(function(element) {
        callback.call(element);
      });
    }
  };

  Dom.prototype.has = function(selector) {
    if (selector) {
      return this.elements.some(function(element) {
        return Array.prototype.slice.call(element.childNodes).some(function(child) {
          return child.parentNode.querySelectorAll(selector).length > 0;
        });
      });
    }
  };

  Dom.prototype.is = function(selector) {
    var targets;

    if (selector) {
      targets = document.querySelectorAll(selector);
      return this.elements.some(function(element) {
        return Array.prototype.slice.call(targets).some(function(target) {
          return element.isEqualNode(target);
        });
      });
    }
  };

  Dom.prototype.filter = function(selector) {
    var elements = [];

    if (selector) {
      this.elements.forEach(function(element) {
        if (element.parentNode.querySelectorAll(selector).length > 0) {
          elements.push(element);
        }
      });
    }
    return new Dom(elements);
  };

  Dom.prototype.slice = function(start, end) {
    var elements = [],
      start = start || 1,
      end = end || this.elements.length;

    this.elements.forEach(function(element, index) {
      if (start < index + 2 && end > index) {
        elements.push(element);
      }
    });

    return new Dom(elements);
  };

})();
