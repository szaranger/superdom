(function() {
  'use strict';

  Dom.prototype.replaceWith = function (element) {
		if(element) {
			this.elements.forEach(function (target) {
				target.outerHTML = element[0].outerHTML;
			});
		}
	};

  Dom.prototype.replaceAll = function (elements) {
    var source = this.elements[0];
    
		if(this.callee === 'create' && elements) {
			elements.elements.forEach(function (element) {
				element.outerHTML = source.outerHTML;
			});
		}
	};

})();
