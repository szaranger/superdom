(function() {
  'use strict';

  describe("DOM.slideUp()", function() {
    var result;

    it("should hide and element", function() {
      DOM.query('A').slideUp('fast');
      setTimeout(function() {
        expect(DOM.query('A').elements[0].style.display).toEqual('none');
      }, 1000);
    });

  });

})();
