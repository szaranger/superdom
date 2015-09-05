(function() {
  'use strict';

  Dom.prototype.attr = function(attr, val) {
    var values = [];

    if (attr && this.elements.length > 0) {
      this.elements.forEach(function(element) {
        if (val) {
          element.setAttribute(attr, val);
        } else {
          values.push(element.getAttribute(attr));
        }
      });

      if (!val) {
        return this.callee === 'get' ? values[0] : values;
      }
    }
  };

})();
