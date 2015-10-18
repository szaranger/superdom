(function() {
  'use strict';

  Dom.prototype.hasClass = function(className) {
    return this.elements.some(function(element) {
      if (element.classList) {
        return element.classList.contains(className);
      } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
      }
    });
  };

  Dom.prototype.addClass = function(className) {
    if (className && this.elements[0]) {
      this.elements.forEach(function(element) {
        if (element.classList) {
          element.classList.add(className);
        } else {
          element.className += ' ' + className;
        }
      });
    }
    return new Dom(this.elements);
  };

  Dom.prototype.removeClass = function(className) {
    this.elements.forEach(function(element) {
      if (className) {
        if (element.classList) {
          element.classList.remove(className);
        } else {
          element.className = element.className.replace(new RegExp(
            '(^|\\b)' +
            className.split(' ').join('|') +
            '(\\b|$)', 'gi'),
            ' ');
        }
      } else {
        element.className = '';
      }
    });

    return new Dom(this.elements);
  };

  Dom.prototype.toggleClass = function(className) {
    var classes,
      existingIndex;

    if(className) {
      this.elements.forEach(function(element) {
        if (element.classList) {
          element.classList.toggle(className);
        } else {
          classes = element.className.split(' '),
          existingIndex = classes.indexOf(className);

          if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
          else
            classes.push(className);

          element.className = classes.join(' ');
        }
      });
    }

    return new Dom(this.elements);
  };

})();
