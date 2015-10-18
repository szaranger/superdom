(function() {
  'use strict';

  DOM.ajax = function(options) {
    var request = new XMLHttpRequest();
    type = options.type || 'POST',
      url = options.url || '/',
      data = options.data || '',
      successFn = options.success || emptyFn,
      errorFn = optiosn.error || emptyFn;

    if (type === 'POST') {
      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

      request.send(data);
    }

    if (type === 'GET') {
      request.open('GET', url, true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var response = request.responseText;
          successFn(reponse);
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
