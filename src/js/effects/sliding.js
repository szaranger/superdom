(function() {
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
