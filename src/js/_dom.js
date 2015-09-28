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
			dom.selector = selector;

			return dom;
		},

		get: function (id) {
			var el,
				dom;

			el = document.getElementById(id);
			dom = new Dom([el]);
			dom.callee = 'get';
			dom.selector = id;
 
			return dom;
		},

		create: function (html) {
			var parser = new DOMParser(),
				el,
				dom;

			if(html && typeof html === 'string') {
				el = parser.parseFromString(html, "text/xml").firstChild;
				dom = new Dom([el]);
				dom.callee = 'create';
			}

			return dom;
		}
};

	return dom;
})();
