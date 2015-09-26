(function() {
  'use strict';

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

})();
