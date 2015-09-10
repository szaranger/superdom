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

})();
