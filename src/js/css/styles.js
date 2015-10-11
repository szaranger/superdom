(function() {
  'use strict';

  Dom.prototype.css = function(style, value) {
    var styles = [];

    if (style) {
      this.elements.forEach(function(element) {
        var computedStyle = document.defaultView.getComputedStyle(element);

        if (value) {
          element.style[style] = value;
        } else {
          styles.push(computedStyle.getPropertyValue(style));
        }
      });

      return !value ?
        (this.callee === 'get' ? styles[0] : styles) : new Dom(this.elements);
    }
  };

  Dom.prototype.height = function(value) {
    return getDimension.call(this, 'height', value);
  };

  Dom.prototype.width = function(value) {
    return getDimension.call(this, 'width', value);
  };

  function getDimension(dimension, value) {
    var element,
      computedStyle;

    if(value) {
      if(typeof value === 'number') {
        this.elements.forEach(function(element) {
          element.style[dimension] = value + 'px';
        });
      }
      return new Dom(this.elements);
    } else {
      element = this.elements[0];

      if(element) {
        computedStyle = document.defaultView.getComputedStyle(element)
        return parseInt(computedStyle.getPropertyValue(dimension).split('px')[0]);
      }
    }
  }

})();
