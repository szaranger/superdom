(function() {
  'use strict';

  Dom.prototype.click = function(handler) {
    this.elements.forEach(function (element) {
      element.onclick = handler;
    });
  };

  Dom.prototype.dblclick = function(handler) {
    this.elements.forEach(function (element) {
      element.ondblclick = handler;
    });
  };

  Dom.prototype.hover = function(handler) {
    this.elements.forEach(function (element) {
      element.onmouseover = handler;
      element.onmouseout = handler;
    });
  };

  Dom.prototype.mouseenter = function(handler) {
    this.elements.forEach(function (element) {
      element.onmouseover = handler;
    });
  };

  Dom.prototype.mouseleave = function(handler) {
    this.elements.forEach(function (element) {
      element.onmouseout = handler;
    });
  };

  Dom.prototype.mousedown = function(handler) {
    this.elements.forEach(function (element) {
      element.onmousedown = handler;
    });
  };

  Dom.prototype.mousemove = function(handler) {
    this.elements.forEach(function (element) {
      element.onmousemove = handler;
    });
  };

  Dom.prototype.mouseout = function(handler) {
    this.elements.forEach(function (element) {
      element.onmouseout = handler;
    });
  };

  Dom.prototype.mouseover = function(handler) {
    this.elements.forEach(function (element) {
      element.onmouseover = handler;
    });
  };

  Dom.prototype.mouseup = function(handler) {
    this.elements.forEach(function (element) {
      element.onmouseup = handler;
    });
  };

})();
