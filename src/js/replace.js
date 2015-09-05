(function() {
  'use strict';

  Dom.prototype.replace = function (element) {
		if(element) {
			this.elements.forEach(function (target) {
				target.outerHTML = element[0].outerHTML;
			});
		}
	};

})();
