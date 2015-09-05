(function() {
  'use strict';

  Dom.prototype.hide = function() {
    this.elements.forEach(function(element) {
      element.style.display = 'none';
    });
  };

  Dom.prototype.show = function() {
    this.elements.forEach(function(element) {
      element.style.display = 'block';
    });
  };

  Dom.prototype.toggle = function() {
    var display;

    this.elements.forEach(function(element) {
      display = element.style.display;
      element.style.display = display === 'block' ? 'none' : 'block';
    });
  };

})();
