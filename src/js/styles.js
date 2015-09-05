(function() {
  'use strict';

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
	};

})();
