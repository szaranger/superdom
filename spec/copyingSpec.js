(function() {
  'use strict';

  describe("DOM.clone()", function() {
    var result;

    it("should clone matching elements", function() {
      DOM.get('C').append(DOM.query('#A').clone());
      result = DOM.query('#A');
      expect(result.length).toEqual(2);
    });
  });

})();
