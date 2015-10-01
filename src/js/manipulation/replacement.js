(function() {
  'use strict';

  Dom.prototype.replaceWith = function (element) {
		if(element) {
			this.elements.forEach(function (target) {
				target.outerHTML = element[0].outerHTML;
			});
		}
	};

  Dom.prototype.replaceAll = function (selector) {
    var source,
      target;

    if(this.callee === 'create') {
      source = this.elements[0];
      target = DOM.query(selector);

			target.elements.forEach(function (element) {
				element.outerHTML = source.outerHTML;
			});
		}
	};

})();
