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
  };

  DOM.isArray = function(array) {
    if(array) {
      return Array.isArray(array);
    }
  };

  DOM.isEmptyObject = function(object) {
    if(object) {
      for(var key in object) {
        if(object.hasOwnProperty(key)){
          return false;
        }
      }
      return true;
    }
  };

  DOM.isFunction = function(fn) {
    if(fn) {
      return typeof fn === 'function';
    }
  };

  DOM.isPlainObject = function(object) {
    if(object) {
      return Object.prototype.toString.call(object) === '[object Object]'
    }
  };

  DOM.isWindow = function(object) {
    if(object) {
      var toString = Object.prototype.toString.call(object);
      return toString === '[object global]' ||
        toString === '[object Window]' ||
        toString === '[object DOMWindow]';
    }
  };

  DOM.isXMLDoc = function(element) {
    var documentElement ;

    if(element) {
      documentElement = (element ? element.ownerDocument || element : 0).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    }
  };

  DOM.makeArray = function(object) {
    if(object) {
      return Array.prototype.slice.call(object);
    }
  };

  DOM.map = function(elements, fn) {
    var elements = elements || [];

    if(fn) {
      elements = Array.prototype.slice.call(elements);
      return elements.map(fn);
    }
  };

  DOM.merge = function(first, second) {
    if(first && second && Array.isArray(first)) {
      return first.concat(second);
    }
  };

  DOM.noop = function() {
  };

  DOM.now = function() {
    return (new Date).getTime();
  };

  DOM.parseHTML = function(str) {
    var doc;

    if(str) {
      doc = document.implementation.createHTMLDocument();
      doc.body.innerHTML = str;

      return doc.body.children;
    }
  }

  DOM.parseJSON = function(str) {
    if(str) {
      return JSON.parse(str);
    }
  };

  // http://jsfiddle.net/D2QpZ/
  DOM.parseXML = function(str) {
    var parser,
      xmlDoc;

    if(str) {
      if (window.DOMParser) {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(str, "text/xml");
      } else {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.loadXML(str);
      }

      return xmlDoc;
    }
  }

  DOM.proxy = function(fn, context) {
    if(fn && context) {
      fn.bind(context);
    }
  };

  /*
   * test
   * var fn1 = function() {console.log('hello');}
   * var fn2 = function() {console.log('world');}
   * var q = DOM.queue(fn1, fn2);
   * q
   */
  DOM.queue = function() {
    var queue = [],
      args = Array.prototype.slice.call(arguments);

      args.forEach(function(arg) {
        queue.push(arg);
      });

    return queue;
  };

  /*
   * test
   * var fn1 = function() {console.log('hello');}
   * var fn2 = function() {console.log('world');}
   * var q = DOM.queue(fn1, fn2);
   * DOM.dequeue(q);
   * q;
   */
  DOM.dequeue = function(queue) {
    if(queue) {
      return queue.pop();
    }
  };

  DOM.globalEval = function(script) {
    if(script) {
      window['eval'].call(window, script);
    }
  };

})();
