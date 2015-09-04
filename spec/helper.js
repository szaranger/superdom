(function() {
  'use strict';

  beforeEach(function() {

    var script = document.createElement('script');
    script.setAttribute('src', 'public/js/main.min.js');

    createTargetDiv('Target');

    createElement("div", "A", "A");
    createElement("span", "B", "B");
    createElement("div", "C", "C", "group");
    createElement("div", "D", "D");
    createElement("div", "E", "E", "group");
    createElement("div", "F", "F");
  });

  function createTargetDiv(id) {
    var target = document.getElementById(id);

    if(target) {
      document.body.removeChild(target);
    }

    var el = document.createElement('div');
    el.id = 'Target';
    document.body.appendChild(el)
  }

  function createElement(tagName, id, innerHTML, className) {
    var el = document.createElement(tagName);
    el.id = id;
    el.className = className;
    el.innerHTML = innerHTML;

    document.getElementById('Target').appendChild(el);
  }

})();
