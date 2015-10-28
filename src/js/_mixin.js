var Mixin = (function() {
  'use strict';

  var mixin = {
    
    get duration() {
      var duration = arguments[0],
        def = arguments[1],
        slow = arguments[2],
        fast = arguments[3];

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
    },

    objectFromArray: function(array) {
      var object = {};

      array.forEach(function(prop) {
        object[prop] = undefined;
      });

      return object;
    },

    slice: function(array) {
      return Array.prototype.slice.call(array);
    },

    forEachProperty: function(object, fn) {
      var key,
        value,
        index = -1;

      if(typeof object === 'object') {
        for(var prop in object) {
          if(object.hasOwnProperty(prop)) {
            key = prop;
            value = object[prop];
            ++index;

            fn.call(this, key, value, index);
          }
        }
      }
    }
  };

  return mixin;
})();
