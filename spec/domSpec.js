(function() {
  'use strict';

  describe("DOM.get(<selector>)", function() {
    var result;

    it("should return a single element by id", function() {
      result = DOM.get('A');
      expect(result.elements.length).toEqual(1);
    });
  });

  describe("DOM.query(<selector>)", function() {
    var result;

    it("should return elements by class name", function() {
      result = DOM.query('.group');
      expect(result.elements.length).toEqual(2);
    });
  });

  describe("DOM.html()", function() {
    var result;

    it("should return matching elements", function() {
      result = DOM.query('.group').html();
      expect(result.length).toEqual(2);
    });

    it("should return HTML elements", function() {
      result = DOM.query('.group').html();
      expect(result[0]).toEqual('<div id="C" class="group">C</div>');
    });
  });

})();
