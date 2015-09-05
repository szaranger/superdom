(function() {
  'use strict';

  Dom.prototype.children = function() {
    var children = [];

    this.elements.forEach(function(element) {
      children.push(element.children);
    });

    children = new Dom(children);

    return this.callee === 'get' ? children.first() : children;
  };

})();
