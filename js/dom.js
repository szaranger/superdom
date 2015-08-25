DOM = (function () {
	'use strict';

	function Dom(els) {
		this.ids = [];
		this.classes = [];
		this.tags = [];

		for(var i = 0; i < els.length; i++ ) {
			this[i] = els[i];

      if (this[i].hasAttribute('id')) {
      	this.ids.push(this[i].getAttribute('id'));
      }

			if (this[i].hasAttribute('class')) {
      	this.classes.push(this[i].getAttribute('class'));
      }

			this.tags.push(this[i].tagName);
  	}

    this.length = els.length;
	}

	Dom.prototype.html = function () {
		var result = [],
			query;

		query = getQuerySelectors.call(this);

		if(query.selectors.length === 1) {
			return document.querySelector(query.prefix + query.selectors[0]).outerHTML;
		} else {
			query.selectors.forEach(function (selector) {
				result.push(document.querySelector(query.prefix + selector).outerHTML);
			});
			return result;
		}
	};

	Dom.prototype.replace = function (el) {
		var target,
			source,
			query;

		query = getQuerySelectors.call(this);

		query.selectors.forEach(function (selector) {
			source = new Dom(el);
			target = document.querySelector(query.prefix + selector);
			source = document.querySelector('#' + source.ids[0]);
			target.outerHTML = source.outerHTML;
		});
	};

	Dom.prototype.text = function (text) {
		var target,
			result = [],
			query;

		query = getQuerySelectors.call(this);

		if (text) {

			query.selectors.forEach(function (selector) {
				target = document.querySelector(query.prefix + selector);
				target.innerText = text;
			});

		} else {

			if(query.selectors.length === 1) {
				return document.querySelector(query.prefix + query.selectors[0]).innerText;
			} else {
				query.selectors.forEach(function (selector) {
					result.push(document.querySelector(query.prefix + selector).innerText);
				});
				return result;
			}

		}
	},

	Dom.prototype.first = function (el) {
		return this[0];
	};

	Dom.prototype.hasClass = function (className) {
		return this.classes.some(function(cls) {
			if(cls === className) {
				return true;
			}
			return false;
		});
	};

	function getQuerySelectors() {
		var target,
			prefix,
			selectors;

		if(this.ids) {
			prefix = '#';
			selectors = this.ids;
		} else if(this.classes) {
			prefix = '.';
			selectors = this.classes;
		} else {
			prefix = '';
			selectors = this.tags;
		}

		return {
			prefix: prefix,
			selectors: selectors
		};
	}

	var dom = {
		query: function (selector) {
			var el = document.querySelectorAll(selector);
			return new Dom(el);
		},

		get: function (id) {
			var el = document.getElementById(id);
			return new Dom([el]);
		}
	}

	return dom;

})();
