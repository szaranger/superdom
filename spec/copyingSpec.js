(function() {
  'use strict';

  describe("DOM.clone()", function() {
    var result;

    it("should clone a second element", function() {
      DOM.get('C').append(DOM.query('#A').clone());
      result = DOM.query('#A');
      expect(result.elements.length).toEqual(2);
    });

    it("should clone matching elements", function() {
      DOM.get('C').append(DOM.query('#A').clone());
      result = DOM.get('C').children().first();
      expect(DOM.get('C').children().outerHTML).toEqual(DOM.get('A').elements.outerHTML);
    });
  });

})();
