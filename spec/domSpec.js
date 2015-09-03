'use strict';

beforeAll(function() {
  var script = document.createElement('script')
  script.setAttribute('src', 'public/js/main.min.js')

  createElement("div", "A", "A");
  createElement("span", "B", "B");
  createElement("div", "C", "C", "group");
  createElement("div", "D", "D");
  createElement("div", "E", "E", "group");
  createElement("div", "F", "F");
});

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

function createElement(tagName, id, innerHTML, className) {
  var el = document.createElement(tagName);
  el.id = id;
  el.className = className;
  el.innerHTML = innerHTML;

  document.body.appendChild(el);
}
