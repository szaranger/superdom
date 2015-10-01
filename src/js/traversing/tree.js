(function() {
  'use strict';

  Dom.prototype.children = function() {
    var children = [];

    this.elements.forEach(function(element) {
      Array.prototype.slice.call(element.children).forEach(function(child) {
        children.push(child);
      });
    });

    return new Dom(children);
  };

  Dom.prototype.find = function(selector) {
    var result;

    if (selector) {
      result = document.querySelectorAll(this.selector + ' ' + selector);
    }

    return new Dom(result);
  };

  Dom.prototype.parent = function(filter) {
    return getAncestors.call(this, filter, true);
  };

  Dom.prototype.parents = function(filter) {
    return getAncestors.call(this, filter);
  };

  Dom.prototype.closest = function(filter) {
    return closest.call(this, filter);
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

  Dom.prototype.nextUntil = function(filter) {
    return getElementSibling.call(this, 'next', filter, false, true);
  };

  Dom.prototype.prevUntil = function(filter) {
    return getElementSibling.call(this, 'prev', filter, false, true);
  };

  Dom.prototype.siblings = function(filter) {
    return getAllElementSiblings.call(this, filter);
  };

  function getElementSibling(position, filter, isSingle, until) {
    var result = [],
      position = position || 'next',
      prefix = this.callee === 'get' ? '#' : '',
      selector = document.querySelector(prefix + this.selector),
      sibling,
      element;

    sibling = position === 'next' ?
      selector.nextElementSibling : selector.previousElementSibling;

    if (sibling) {
      do {
        /* Insert when selector is found - nextAll(), prevAll() */
        if (!until) {
          element = filter ?
            (sibling.outerHTML.indexOf(filter) > -1 ? sibling : undefined) : sibling;
        } else {
          element = filter ?
            (sibling.outerHTML.indexOf(filter) > -1 ? undefined : sibling) : sibling;
        }

        if (element) {
          result.push(element);
        }

        /* Break if until selector is found - nextUntil(), prevUntil() */
        if (until) {
          if (sibling.outerHTML.indexOf(filter) > -1) {
            break;
          }
        }
      } while (!isSingle && (sibling = sibling.nextElementSibling))
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
      if (sibling !== this.elements[0]) {
        result.push(sibling);
      }
    } while (sibling = sibling.nextElementSibling)

    return new Dom(result);
  }

  function closest(filter) {
    var result = [],
      sibling = this.elements[0].parentNode.childNodes[1],
      match = false,
      lastSibling;

    while (!match && sibling && filter) {
      do {
        match = sibling.outerHTML.indexOf(filter) > -1;
        if (match && sibling !== this.elements[0]) {
          result.push(sibling);
          break;
        }
        lastSibling = sibling;
      } while (sibling = sibling.nextElementSibling)

      sibling = lastSibling.parentNode;
    }

    return new Dom(result);
  }

  function getAncestors(filter, isParent) {
    var parents = [],
      parent;

    this.elements.forEach(function(element) {
      parent = element.parentNode;
      do {
        if(filter) {
          if(parent.outerHTML.indexOf(filter) > -1 ) {
            parents.push(parent);
          }
        } else {
          parents.push(parent);
        }
      } while (!isParent && (parent = parent.parentNode))
    });

    return new Dom(parents);
  };

})();
