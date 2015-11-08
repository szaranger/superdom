'use strict';

function bindEvent(eventName, handler) {
  var handler = handler || Mixin.emptyFn;

  this.elements.forEach(function (element) {
    element.addEventListener(eventName, handler);
  });
}
