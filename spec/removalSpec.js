(function() {
  'use strict';

  describe("DOM.empty()", function() {
    var result;

    it("should remove matching elements", function() {
      DOM.query('.group').empty();
      result = DOM.query('.group').html();
      expect(result.length).toEqual(0);
    });
  });

  describe("DOM.remove()", function() {
    var result;

    it("should remove matching elements", function() {
      DOM.query('.group').remove();
      result = DOM.query('.group').html();
      expect(result.length).toEqual(0);
    });
  });

  describe("DOM.detach()", function() {
    var elements,
      result;

    it("should return matching elements", function() {
      elements = DOM.query('.group').detach();
      expect(elements.length).toEqual(2);
    });

    it("should remove matching elements", function() {
      DOM.query('.group').detach();
      result = DOM.query('.group').html();
      expect(result.length).toEqual(0);
    });
  });

  describe("DOM.unwrap()", function() {
    var result;

    it("should remove parent", function() {
      DOM.get('A').append(DOM.get('B'));
      DOM.get('B').unwrap();
      result = DOM.get('A');
      expect(result.elements.length).toEqual(0);
    });

    it("should exist self", function() {
      DOM.get('A').append(DOM.get('B'));
      DOM.get('B').unwrap();
      result = DOM.get('B');
      expect(result.elements.length).toEqual(1);
    });
  });

})();
