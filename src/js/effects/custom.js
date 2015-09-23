(function() {
  'use strict';

  Dom.prototype.animate = function(styles, duration, easing, callback) {
    var values = [];

    this.elements.forEach(function(element) {
      if (styles) {
        for (var property in styles) {
          if (styles.hasOwnProperty(property)) {

            if (typeof duration === 'string') {
              if (duration === 'slow') {
                duration = 150;
              } else if (duration === 'fast') {
                duration = 200;
              } else {
                duration = 400;
              }
            }

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
  };

  function animate(options) {

    var start = new Date(),
      delta;

    var id = setInterval(function() {
      var timePassed = new Date() - start;
      var progress = timePassed / options.duration;

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
