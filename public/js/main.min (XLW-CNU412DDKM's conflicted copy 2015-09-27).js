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
;var Mixin = (function() {
  'use strict';

  var mixin = {
    getDuration: function(duration, def, slow, fast) {
      
        if (typeof duration === 'string') {
          if (duration === 'slow') {
            duration = slow;
          } else if (duration === 'fast') {
            duration = fast;
          } else {
            duration = def;
          }
        }

        return duration;
      }
    };
    
    return mixin;

})();;(function() {
  'use strict';

  Dom.prototype.hasClass = function(className) {
    return this.elements.some(function(element) {
      return element.classList.contains(className);
    });
  };

  Dom.prototype.addClass = function(className) {
    if (className && this.elements[0]) {
      this.elements.forEach(function(element) {
        element.classList.add(className);
      });
    }
    return new Dom(this.elements);
  };

  Dom.prototype.removeClass = function(className) {
    if (this.elements[0]) {
      this.elements.forEach(function(element) {
        if (className) {
          element.classList.remove(className);
        } else {
          element.classList.remove();
        }
      });
    }
    return new Dom(this.elements);
  };

})();
;(function() {
  'use strict';

  Dom.prototype.css = function(style, value) {
    var styles = [];

    if (style) {
      this.elements.forEach(function(element) {
        var computedStyle = document.defaultView.getComputedStyle(element);

        if (value) {
          element.style[style] = value;
        } else {
          styles.push(computedStyle.getPropertyValue(style));
        }
      });

      return !value ?
        (this.callee === 'get' ? styles[0] : styles) : new Dom(this.elements);
    }
  };

  Dom.prototype.height = function(value) {
    var element,
      computedStyle;

    if(value) {
      if(typeof value === 'number') {
        this.elements.forEach(function(element) {
          element.style['height'] = value + 'px';
        });
      }
      return new Dom(this.elements);
    } else {
      element = this.elements[0];

      if(element) {
        computedStyle = document.defaultView.getComputedStyle(element)
        return parseInt(computedStyle.getPropertyValue('height').split('px')[0]);
      }
    }
  };

})();
;(function() {
  'use strict';

  Dom.prototype.hide = function() {
    this.elements.forEach(function(element) {
      element.style.display = 'none';
    });
  };

  Dom.prototype.show = function() {
    this.elements.forEach(function(element) {
      element.style.display = 'block';
    });
  };

  Dom.prototype.toggle = function() {
    var display;

    this.elements.forEach(function(element) {
      display = element.style.display;
      element.style.display = display === 'block' ? 'none' : 'block';
    });
  };

})();;(function() {
  'use strict';

  Dom.prototype.animate = function(styles, duration, easing, callback) {
    var values = [];

    this.elements.forEach(function(element) {
      if (styles) {
        for (var property in styles) {
          if (styles.hasOwnProperty(property)) {

            duration = Mixin.getDuration(duration, 400, 150, 400);  

            animate({
              delay: 10,
              duration: duration || 400,
              delta: function(progress) {
                if (easing) {
                  for (var property in easing) {
                    switch (easing[property]) {
                      case 'easeIn':
                        progress = 1 - Math.sin(Math.acos(progress));
                        break;
                      case 'easeOut':
                        progress = 1 - delta(1 - progress);
                        break;
                      case 'easeInOut':
                        progress = progress < .5 ?
                          delta(2 * progress) / 2 :
                          (2 - delta(2 * (1 - progress))) / 2;
                        break;
                    }
                  }
                }
                return progress;
              },
              step: function(delta) {
                var oldValue = element.style[property].split('px')[0],
                  calculatedValue = styles[property] * delta,
                  newValue = styles[property];

                if(oldValue < newValue && oldValue < calculatedValue) {
                  element.style[property] = styles[property] * delta + "px";
                } else {
                  if(oldValue > newValue) {
                    element.style[property] = oldValue - (styles[property] * delta) + "px";
                  }
                }
              }
            });

          }
        }
      }
    });

    return new Dom(this.elements);
  };

  function animate(options) {
    var start = new Date(),
      delta,
      id;

    var id = setInterval(function() {
      var timePassed = new Date() - start,
        progress = timePassed / options.duration;

      if (progress > 1) {
        progress = 1;
      }

      delta = options.delta(progress);
      options.step(delta);

      if (progress === 1) {
        clearInterval(id);
      }
    }, options.delay || 10);

  }

})();
;(function() {
  'use strict';

  Dom.prototype.fadeIn = function(duration, callback) {
      
    this.elements.forEach(function(element) {
      fade(element, duration, 'in', callback);
    });

    return new Dom(this.elements);
  }

  Dom.prototype.fadeOut = function(duration, callback) {
      
    this.elements.forEach(function(element) {
      fade(element, duration, 'out', callback);
    });

    return new Dom(this.elements);
  }
  
  Dom.prototype.fadeToggle = function(duration, callback) {
      
    this.elements.forEach(function(element) {
      toggle(element, duration, callback);
    });

    return new Dom(this.elements);
  };
    
  function toggle (element, duration, callback) {
    fade(element, duration, element.style.opacity !== '0' ? 'out' : 'in', callback);
  }

  function fade(element, duration, direction, callback) {
    var style = element.style,
      frameRate = 10,
      opacity,
      totalFrames,
      second = 1000,
      duration = duration || 100,
      interval = second / frameRate,
      elementOpacity = element.opacity,
      finalOpacity,
      opacityIncrement;

    if (duration < 10) {
      duration = 10;
    }

    duration = Mixin.getDuration(duration, 100, 150, 50);

    totalFrames = duration / frameRate;

    if (direction === 'in') {
      if (style.opacity === '1') {
        return;
      }
      opacity = 0;
      finalOpacity = 1;
      style.opacity = '0';
      opacityIncrement = finalOpacity / totalFrames;
    } else {
      if (style.opacity === '0') {
        return;
      }
      opacity = 1;
      finalOpacity = 0;
      opacityIncrement = opacity / totalFrames;
    }

    var tween = function() {
      if (direction === 'in') {
        opacity += opacityIncrement;
        style.opacity = opacity;
        if (opacity < finalOpacity) {
          setTimeout(tween, interval);
        } else {
          style.opacity = '1';
          if (callback) {
            callback();
          }
        }
      } else {
        opacity -= opacityIncrement;
        style.opacity = opacity;
        if (opacity > finalOpacity) {
          setTimeout(tween, interval);
        } else {
          style.opacity = '0';
          if (callback) {
            callback();
          }
        }
      }
    };

    tween();
    
  }
})();
;(function() {
  'use strict';

  Dom.prototype.slideDown = function(duration, callback) {
    var elements = [];

    this.elements.forEach(function(element) {
      slide(element, duration, 'down', callback);
    });

    return new Dom(elements);
  };

  Dom.prototype.slideUp = function(duration, callback) {
    var elements = [];

    this.elements.forEach(function(element) {
      slide(element, duration, 'up', callback);
    });

    return new Dom(elements);
  };

  Dom.prototype.slideToggle = function(duration, callback) {
    var elements = [];

    this.elements.forEach(function(element) {
      toggle(element, duration, callback);
    });

    return new Dom(elements);
  };

  function toggle (element, duration, callback) {
    slide(element, duration, element.offsetHeight !== 0 ? 'up' : 'down', callback);
  }

  function slide(element, duration, direction, callback) {
    var style = element.style,
      frameRate = 10,
      height,
      totalFrames,
      second = 1000,
      duration = duration || 400,
      interval = second / frameRate,
      elementHeight = element.offsetHeight,
      finalHeight,
      heightIncrement;

    if (duration < 10) {
      duration = 10;
    }

    duration = Mixin.getDuration(duration, 400, 600, 200);

    totalFrames = duration / frameRate;

    if (direction === 'down') {
      if (elementHeight !== 0) {
        return;
      }
      height = 0;
      finalHeight = style.height.split('px')[0];
      style.display = 'block';
      style.height = '0px';
      heightIncrement = finalHeight / totalFrames;
    } else {
      if (elementHeight === 0) {
        return;
      }
      height = elementHeight;
      finalHeight = 0;
      heightIncrement = height / totalFrames;
    }

    var tween = function() {
      if (direction === 'down') {
        height += heightIncrement;
        style.height = height + 'px';
        if (height < finalHeight) {
          setTimeout(tween, interval);
        } else {
          if(callback) {
            callback();
          }
        }
      } else {
        height -= heightIncrement;
        style.height = height + 'px';
        if (height > finalHeight) {
          setTimeout(tween, interval);
        } else {
          style.display = 'none';
          style.height = elementHeight + 'px';
          if(callback) {
            callback();
          }
        }
      }
    };

    tween();
    
  }

})();
;(function() {
  'use strict';

  Dom.prototype.click = function(callback) {
    this.elements.forEach(function (element) {
      element.onclick = callback;
    });
  };

  Dom.prototype.dblclick = function(callback) {
    this.elements.forEach(function (element) {
      element.ondblclick = callback;
    });
  };

  Dom.prototype.hover = function(callback) {
    this.elements.forEach(function (element) {
      element.onmouseover = callback;
      element.onmouseout = callback;
    });
  };

  Dom.prototype.mouseenter = function(callback) {
    this.elements.forEach(function (element) {
      element.onmouseover = callback;
    });
  };

  Dom.prototype.mouseleave = function(callback) {
    this.elements.forEach(function (element) {
      element.onmouseout = callback;
    });
  };

  Dom.prototype.mousedown = function(callback) {
    this.elements.forEach(function (element) {
      element.onmousedown = callback;
    });
  };

  Dom.prototype.mousemove = function(callback) {
    this.elements.forEach(function (element) {
      element.onmousemove = callback;
    });
  };

  Dom.prototype.mouseout = function(callback) {
    this.elements.forEach(function (element) {
      element.onmouseout = callback;
    });
  };

  Dom.prototype.mouseover = function(callback) {
    this.elements.forEach(function (element) {
      element.onmouseover = callback;
    });
  };

  Dom.prototype.mouseup = function(callback) {
    this.elements.forEach(function (element) {
      element.onmouseup = callback;
    });
  };

})();
;(function() {
  'use strict';

  Dom.prototype.first = function() {
    var elements = this.elements;

    return elements ? elements[0][0] : this[0][0];
  };

  Dom.prototype.last = function() {
    var elements = this.elements;

    return elements ? elements[this.elements.length - 1] : this[this.length - 1];
  };

})();
;(function() {
  'use strict';

  Dom.prototype.html = function() {
    var result = [];

    this.elements.forEach(function(element) {
      result.push(element.outerHTML);
    });

    return this.callee === 'get' ? result[0] : result;
  };

  Dom.prototype.text = function(text) {
    var result = [];

    if (text) {
      this.elements.forEach(function(element) {
        element.innerText = text;
      });
    } else {
      this.elements.forEach(function(element) {
        result.push(element.innerText);
      });
      return this.callee === 'get' ? result[0] : result;
    }
  };

  Dom.prototype.prepend = function(elements) {
    var parents,
      children,
      fragment,
      temp,
      child;

    if (elements) {
      parents = this.elements;

      parents.forEach(function(parent, i) {
        if (typeof elements === 'string') {
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

})();
;(function() {
  'use strict';

  var CHROME = 'Chrome',
    GECKO = 'Firefox',
    IE = 'IE',
    OPERA = 'Opera',
    SAFARI = 'Safari';

  DOM.isChrome = function() {
      return getBrowserName() === CHROME;
  };

  DOM.isFirefox = function() {
      return getBrowserName() === GECKO;
  };

  DOM.isIE = function() {
      return getBrowserName() === IE;
  };

  DOM.isOpera = function() {
      return getBrowserName() === OPERA;
  };

  DOM.isSafari = function() {
      return getBrowserName() === SAFARI;
  };

  DOM.detectBrowser = function() {
      return detectBrowser();
  };

  function getBrowserName() {
    return detectBrowser().split(' ')[0];
  }

  function detectBrowser() {
      var userAgent = navigator.userAgent,
        temp,
        match = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

      if(/trident/i.test(match[1])) {
          temp =  /\brv[ :]+(\d+)/g.exec(userAgent) || [];
          return 'IE '+(temp[1] || '');
      }

      if(match[1] === 'Chrome'){
          temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
          if(temp != null) {
            return temp.slice(1).join(' ').replace('OPR', 'Opera');
          }
      }

      match = match[2]? [match[1], match[2]]: [navigator.appName, navigator.appVersion, '-?'];
      if((temp = userAgent.match(/version\/(\d+)/i)) != null) {
        match.splice(1, 1, temp[1]);
      }

      return match.join(' ');
  }

})();
;(function() {
  'use strict';

  var platform = window.navigator.platform,
    MAC = 'MacIntel',
    LINUX = 'Linux',
    WINDOWS = 'Win32';

  DOM.isMac = function() {
      return platform === MAC;
  };

  DOM.isLinux = function() {
      return platform === LINUX;
  };

  DOM.isWindows = function() {
      return platform === WINDOWS;
  };

})();

//# sourceMappingURL=main.min.js.map