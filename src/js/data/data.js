(function() {
  'use strict';

  Dom.data = function() {
    var args = Mixin.slice(arguments),
      prefix = 'data-dom-',
      object,
      element,
      key,
      value;

    if (args.length === 3) {
      element = args[0];
      key = args[1];
      value = args[2];

      element.setAttribute(prefix + key, value);
    }

    if (args.length === 2) {
      element = args[0];
      object = args[1];

      Mixin.forEachProperty(object, function(key, value) {
        element.setAttribute(prefix + key, value);
      });
    }

    if (args.length === 1) {
      key = args[0];
      value = prefix + key;
      element = document.querySelector('[' + value + ']');

      return element.getAttribute(value);
    }
  };

  // $('#C').data({sex: 'male', height:6})
  Dom.prototype.data = function() {
    var args = Mixin.slice(arguments),
      obj,
      key,
      value,
      prefix = 'data-dom-';

    if(args.length === 1) {
      obj = args[0];
    }

    if(args.length === 2) {
      key = args[0],
      value = args[1]
    }

    if(key) {
      this.elements.forEach(function(element) {
        element.setAttribute(prefix + key, value);
      });
    }

    if(obj) {
      for(var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
          this.elements.forEach(function(element) {
            element.setAttribute(prefix + prop, obj[prop]);
          });
        }
      };
    }
  };

  /*
    $('#C').data({sex: 'male', height:6});
    $('#C').removeData('sex','height');
  */
  Dom.prototype.removeData = function() {
    var args = Mixin.slice(arguments),
      isString = typeof args[0] === 'string',
      isArray = typeof args[0] === 'object',
      prefix = 'data-dom-',
      elements = this.elements,
      list;

    if(isString) {
      list = [args[0]];
    } else if(isArray) {
      list = args[0];
    }

    if(list) {
      list.forEach(function(name) {
        elements.forEach(function(element) {
          element.removeAttribute(prefix + name);
        });
      });
    }
  };

})();
