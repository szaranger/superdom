(function() {
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
