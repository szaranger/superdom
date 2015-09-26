var Mixin = (function() {
  'use strict';

  var mixin = {
    getDuration: function(duration, def, slow, fast) {
      
        if (typeof duration === 'string') {
          if (duration === 'slow') {
            duration = slow;
          } else if (duration === 'fast') {
            duration = fast;
          } else {
            duration = def;
          }
        }

        return duration;
      }
    };
    
    return mixin;

})();