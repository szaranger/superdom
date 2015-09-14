(function() {
  'use strict';

  Dom.prototype.click = function(callback) {
    this.elements.forEach(function (element) {
      element.onclick = callback;
    });
  };

  Dom.prototype.dblclick = function(callback) {
    this.elements.forEach(function (element) {
      element.ondblclick = callback;
    });
  };

  Dom.prototype.hover = function(callback) {
    this.elements.forEach(function (element) {
      element.onmouseover = callback;
      element.onmouseout = callback;
    });
  };

  Dom.prototype.mouseenter = function(callback) {
    this.elements.forEach(function (element) {
      element.onmouseover = callback;
    });
  };

  Dom.prototype.mouseleave = function(callback) {
    this.elements.forEach(function (element) {
      element.onmouseout = callback;
    });
  };

  Dom.prototype.mousedown = function(callback) {
    this.elements.forEach(function (element) {
      element.onmousedown = callback;
    });
  };

})();
