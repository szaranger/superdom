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

  Dom.prototype.innerWidth = function() {
    var element = this.elements[0];

    if(element) {
      return element.clientWidth;
    }
  };

  Dom.prototype.innerHeight = function() {
    var element = this.elements[0];

    if(element) {
      return element.clientHeight;
    }
  };

  Dom.prototype.outerWidth = function(withMargin) {
    var element = this.elements[0],
      margin = 0;

    if(element) {
      if(withMargin) {
        margin = (element.offsetWidth - element.clientWidth) * 2;
      }
      return element.offsetWidth + margin;
    }
  };

  Dom.prototype.outerHeight = function(withMargin) {
    var element = this.elements[0],
      margin = 0;

    if(element) {
      if(withMargin) {
        margin = (element.offsetHeight - element.clientHeight) * 2;
      }
      return element.offsetHeight + margin;
    }
  };

  Dom.prototype.offset = function() {
    var element = this.elements[0],
      rect;

    if(element) {
      rect = el.getBoundingClientRect();

      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      }
    }
  };

  Dom.prototype.position = function() {
    var element = this.elements[0];

    if(element) {
      return {
        top: element.offsetTop,
        left: element.offsetLeft
      };
    }
  };

  Dom.prototype.scrollLeft = function(position) {
    var element = this.elements[0];

    if(element) {
      if(position) {
        element.scrollLeft = position;
      }
      return element.scrollLeft;
    }
  };

  Dom.prototype.scrollTop = function(position) {
    var element = this.elements[0];

    if(element) {
      if(position) {
        element.scrollTop = position;
      }
      return element.scrollTop;
    }
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
