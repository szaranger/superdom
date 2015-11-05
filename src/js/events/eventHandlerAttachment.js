(function() {
  'use strict';

  Dom.prototype.bind = function(eventType, handler) {
    if (eventType && handler) {
      this.elements.forEach(function(element) {
        element.addEventListener(eventType, handler, false);
      });
    }
  };

  /*
    $('#E').delegate('p', 'click', function() {console.log('clicked');});
  */
  Dom.prototype.delegate = function(selector, eventType, handler) {
    this.on(eventType, selector, handler);
  };

  // TODO: Fix not working
  Dom.prototype.off = function(selector, eventType, handler) {
    var elements,
      handler = handler || Mixin.emptyFn,
      selector = selector ? this.selector + ' ' + selector : this.selector;

    if (eventType) {
      elements = document.querySelectorAll(selector);
    } else {
      elements = this.elements;
    }

    Mixin.slice(elements).forEach(function(element) {
      if (eventType) {
        element.removeEventListener(eventType, handler, false);
      } else {
        element.removeEventListener();
      }
    });
  };

  Dom.prototype.on = function() {
    var elements,
      len = arguments.length,
      events = arguments[0],
      selector,
      handler = Mixin.emptyFn;

    if(len === 3) {
      handler = arguments[2];
      selector = arguments[1];
    } else if(len === 2) {
      handler = arguments[1];
    }

    if (events) {
      if (len === 3) {
        elements = document.querySelectorAll(this.selector + ' ' + selector);
      } else {
        elements = this.elements;
      }

      if (elements.length > 0) {
        Mixin.slice(elements).forEach(function(element) {
          element.addEventListener(events, handler, false);
        });
      }
    }
  };

  Dom.prototype.one = function(eventType, selector, handler) {
    var elements,
      handler = handler || Mixin.emptyFn;

    if (selector && eventType) {
      elements = document.querySelectorAll(this.selector + ' ' + selector);

      if (elements.length > 0) {
        Mixin.slice(elements).forEach(function(element) {
          element.addEventListener(eventType, function callee(event) {
            event.target.removeEventListener(event.type, callee);
            return handler(event);
          }, false);
        });
      }
    }
  };

  Dom.prototype.trigger = function(evt) {
    var event = new Event(evt);

    this.elements.forEach(function(element) {
      element.dispatchEvent(event);
    });
  };

  Dom.prototype.unbind = function(eventType, handler) {
    if (eventType && handler){
      this.elements.forEach(function (element) {
        element.removeEventListener(eventType, handler, false);
      });
    }
  };

  Dom.prototype.undelegate = function(selector, eventType, handler) {
    this.off(selector, eventType, handler);
  };

})();
