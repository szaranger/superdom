(function() {
  'use strict';

  Dom.prototype.bind = function(eventType, handler) {
    if (eventType && handler){
      this.elements.forEach(function (element) {
        element.addEventListener(eventType, handler, false);
      });
    }
  };

})();
