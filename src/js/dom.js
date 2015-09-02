DOM = (function () {
	'use strict';

	function Dom(elements) {
    this.elements = Array.prototype.slice.call(elements);
    this.callee = elements.callee;
	}

	Dom.prototype.html = function () {
		var result = [];

		this.elements.forEach(function (element) {
			result.push(element.outerHTML);
		});

		return this.callee === 'get' ? result[0] : result;
	};

	Dom.prototype.text = function (text) {
		var result = [];

		if (text) {
			this.elements.forEach(function (element) {
				element.innerText = text;
			});
		} else {
			this.elements.forEach(function (element) {
				result.push(element.innerText);
			});
			return this.callee === 'get' ? result[0] : result;
		}
	},

	Dom.prototype.replace = function (element) {
		if(element) {
			this.elements.forEach(function (target) {
				target.outerHTML = element[0].outerHTML;
			});
		}
	};

	Dom.prototype.children = function() {
		var children = [];

		this.elements.forEach(function (element) {
			children.push(element.children);
		});

		children =  new Dom(children);

		return this.callee === 'get' ? children.first() : children;
	},

	Dom.prototype.remove = function () {
		this.elements.forEach(function (target) {
			target.outerHTML = null;
		});
	};

	Dom.prototype.first = function () {
		return this[0];
	};

	Dom.prototype.last = function () {
		return this[this.elements.length - 1];
	};

	Dom.prototype.css = function(style, value) {
		var styles = [];

		if(style) {
			this.elements.forEach(function(element) {
				var computedStyle = document.defaultView.getComputedStyle(element);

				if(value) {
					element.style[style] = value;
				} else {
					styles.push(computedStyle.getPropertyValue(style));
				}
			});

			return !value ?
				(this.callee === 'get' ? styles[0] : styles) : new Dom(this.elements);
		}
	},

	Dom.prototype.hasClass = function (className) {
		return this.elements.some(function(element) {
			return element.classList.contains(className);
		});
	};

	Dom.prototype.addClass = function (className) {
		if(className && this.elements[0]) {
			this.elements.forEach(function(element) {
				element.classList.add(className);
			});
		}
		return new Dom(this.elements);
	};

	Dom.prototype.removeClass = function (className) {
		if(this.elements[0]) {
			this.elements.forEach(function(element) {
				if(className) {
					element.classList.remove(className);
				} else {
					element.classList.remove();
				}
			});
		}
		return new Dom(this.elements);
	};

	Dom.prototype.attr = function(attr, val) {
		var values = [];

		if(attr && this.elements.length > 0) {
			this.elements.forEach(function(element) {
				if(val) {
					element.setAttribute(attr, val);
				} else {
					values.push(element.getAttribute(attr));
				}
			});

			if(!val) {
				return this.callee === 'get' ? values[0] : values;
			}
		}
	};

	Dom.prototype.append = function(elements) {
		var parents,
			children,
			fragment,
			temp,
			child;

		if(elements) {
			parents = this.elements;

			parents.forEach(function(parent, i) {
				if(typeof elements === 'string') {
					fragment = document.createDocumentFragment();
					temp = document.createElement('body');
					temp.innerHTML = elements;

					while(child = temp.firstElementChild) {
						fragment.appendChild(child);
					}
					parent.appendChild(fragment);
				} else {
					children = elements.elements;

					children.forEach(function(child) {
						parent.appendChild(child);
					});
				}
			});
		}
	};

	Dom.prototype.prepend = function(elements) {
		var parents,
			children,
			fragment,
			temp,
			child;

		if(elements) {
			parents = this.elements;

			parents.forEach(function(parent, i) {
				if(typeof elements === 'string') {
					parent.insertAdjacentHTML('afterbegin', elements);
				} else {
					children = elements.elements;

					children.forEach(function(child) {
						parent.insertAdjacentHTML('afterbegin', child);
					});
				}
			});
		}
	};

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
