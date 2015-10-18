(function() {
  'use strict';

  DOM.param = function(object) {
    var url = Object.keys(object).map(function(key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(object[key])
    }).join('&');

    return url;
  };

})();
