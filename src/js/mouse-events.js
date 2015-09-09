(function() {
  'use strict';

  Dom.prototype.click = function(callback) {
    this.elements.forEach(function (element) {
      element.onclick = callback;
    });
  };

})();
