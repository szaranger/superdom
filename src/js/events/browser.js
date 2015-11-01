(function() {
  'use strict';

  /*
    $(window).resize(function() { console.log('resized');});
  */
  Dom.prototype.resize = function(handler) {
    if (handler){
      this.elements.forEach(function (element) {
        element.addEventListener('resize', handler, false);
      });
    }
  };

  /*
    $(window).scroll(function() { console.log('scrolled');});
  */
  Dom.prototype.scroll = function(handler) {
    if (handler){
      this.elements.forEach(function (element) {
        element.addEventListener('scroll', handler);
      });
    }
  };

})();
