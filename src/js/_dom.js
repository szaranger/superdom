var Dom = (function () {
	'use strict';

	return function (elements) {
		if(elements.constructor !== NodeList) {
			this.elements = [elements]; // if an Object
		} else {
			this.elements = elements[0] ? Array.prototype.slice.call(elements) : [];
		}

		this.callee = elements.callee;
		this.selector = elements.selector;
	}

})();

DOM = (function () {
	'use strict';

	var dom = {
		query: function (selector) {
			var el,
				dom;

			el = Mixin.isObject(selector) ? selector : document.querySelectorAll(selector);

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

if(!window.$) {
	$ = DOM.query;
}
