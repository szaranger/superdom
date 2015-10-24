(function() {
  'use strict';

  DOM.getJSON = function(options) {
    var request = new XMLHttpRequest();
      type = 'GET',
      url = options.url || '/',
      successFn = options.success || emptyFn,
      errorFn = optiosn.error || emptyFn;

    if (type === 'GET') {
      request.open('GET', url, true);

      request.onload = function() {
        var data;

        if (request.status >= 200 && request.status < 400) {
          // Success!
          data = JSON.parse(request.responseText);
          successFn(data);
        } else {
          // We reached our target server, but it returned an error
          errorFn();
        }
      };

      request.onerror = function() {
        // There was a connection error of some sort
        errorFn();
      };

      request.send();
    }
  };

})();
