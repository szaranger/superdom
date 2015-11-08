(function() {
  'use strict';

  /*
    $('#apply').on('click', function() { console.log('clicked');});
    var e = DOM.Event('click');
    $('#apply').elements[0].dispatchEvent(e); => 'clicked'
  */
  DOM.Event = function(evt) {
    return new Event(evt);
  };

})();
