(function() {
  'use strict';

  describe("DOM.replaceAll()", function() {
    var result;

    it("should replace matching elements", function() {
      DOM.create('<div id="G"><h1>Hello</h1></div>').replaceAll(DOM.query('.group'));
      result = DOM.query('#G');
      expect(result.elements.length).toEqual(2);
    });

    it("should remove matching elements", function() {
      DOM.create('<div id="G"><h1>Hello</h1></div>').replaceAll(DOM.query('.group'));
      result = DOM.query('.group');
      expect(result.elements.length).toEqual(0);
    });
  });

})();
