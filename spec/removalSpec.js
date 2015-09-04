(function() {
  'use strict';

  describe("DOM.empty()", function() {
    var result;

    it("should remove matching elements", function() {
      DOM.query('.group').remove();
      result = DOM.query('.group').html();
      expect(result.length).toEqual(0);
    });
  });

})();
