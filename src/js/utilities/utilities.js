(function() {
  'use strict';

  DOM.contains = function(parent, child) {
    var parentElement,
      childElement;

    if(parent && child) {
      if(parent.elements && child.elements) {
        parentElement = parent.elements[0];
        childElement = child.elements[0];

        return parentElement !== childElement && parentElement.contains(childElement);
      } else {
        return parent !== child && parent.contains(child);
      }
    }
  };

  DOM.extend = function(target) {
    var target = target || {};

    Array.prototype.slice.call(arguments).forEach(function(argument, index) {
      var object = argument;

      if(object) {
        for (var key in object) {
          if (object.hasOwnProperty(key)) {
            if (typeof object[key] === 'object') {
              DOM.extend(target[key], object[key]);
            } else {
              target[key] = object[key];
            }
          }
        }
      }
    });

    return target;
  };

  DOM.inArray = function(element, array) {
    if(element && array) {
      return array.indexOf(element);
    }
  }

  DOM.isArray = function(array) {
    if(array) {
      return Array.isArray(array);
    }
  }

  DOM.isEmptyObject = function(object) {
    if(object) {
      for(var key in object) {
        if(object.hasOwnProperty(key)){
          return false;
        }
      }
      return true;
    }
  }

  DOM.isFunction = function(fn) {
    if(fn) {
      return typeof fn === 'function';
    }
  }

})();
