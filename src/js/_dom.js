var Dom = (function () {
	'use strict';

	return function (elements) {
		this.elements = elements[0] ? Array.prototype.slice.call(elements) : [];
		this.callee = elements.callee;
	}

})();

DOM = (function () {
	'use strict';

	var dom = {
		query: function (selector) {
			var el,
				dom;

			el = document.querySelectorAll(selector);
			dom = new Dom(el);
			dom.callee = 'query';

			return dom;
		},

		get: function (id) {
			var el,
				dom;

			el = document.getElementById(id);
			dom = new Dom([el]);
			dom.callee = 'get';

			return dom;
		}
	};

	return dom;
})();
