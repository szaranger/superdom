(function() {
  'use strict';

  describe("DOM.get(<selector>).click()", function() {
    var result;

    it("should fire callback function", function() {
      DOM.get('Apply').click(function() {
        DOM.query('.group').empty();
        result = DOM.query('.group').html();
      });
      fireEvent(document.getElementById('Apply'),'click');
      expect(result.length).toEqual(0);
    });

  });

})();
