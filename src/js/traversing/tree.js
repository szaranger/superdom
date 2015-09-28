(function() {
  'use strict';

  Dom.prototype.children = function() {
    var children = [];

    this.elements.forEach(function(element) {
      children.push(element.children);
    });

    return new Dom(children);
  };

  Dom.prototype.find = function(selector) {
    var result;

    if (selector) {
      result = new Dom(document.querySelectorAll(this.selector + ' ' + selector));
    }

    return result;
  };

  Dom.prototype.next = function(filter) {
    return getElementSibling.call(this, 'next', filter, true);
  };

  Dom.prototype.prev = function(filter) {
    return getElementSibling.call(this, 'prev', filter, true);
  };
     
  Dom.prototype.nextAll = function(filter) {
    return getElementSibling.call(this, 'next', filter);
  };

  Dom.prototype.prevAll = function(filter) {
    return getElementSibling.call(this, 'prev', filter);
  };

  Dom.prototype.siblings = function(filter) {
    return getAllElementSiblings.call(this, filter);
  };

  function getElementSibling(position, filter, isSingle) {
    var result = [],
      position = position || 'next',
      prefix = this.callee === 'get' ? '#' : '',
      selector = document.querySelector(prefix + this.selector),
      sibling;

    sibling = position === 'next' ?
      selector.nextElementSibling : selector.previousElementSibling;

    if (sibling) {
         do {
          sibling = filter ?
            (sibling.outerHTML.indexOf(filter) > -1 ? sibling : undefined) : sibling;
          result.push(sibling);
          if(isSingle) {
              break;
          }
        } while(sibling = sibling.nextElementSibling)
    }

    return new Dom(result);
  }
      
  function getAllElementSiblings(filter) {
    var result = [],
        sibling;
    
    sibling = this.elements[0].parentNode.firstChild;
    
    do {
      sibling = filter ?
            (sibling.outerHTML.indexOf(filter) > -1 ? sibling : undefined) : sibling;
      if(sibling !== this.elements[0]) {
        result.push(sibling);
      }   
    } while (sibling = sibling.nextElementSibling)
    
    return new Dom(result);    
  }

})();
