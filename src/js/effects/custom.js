(function() {
    'use strict';

    Dom.prototype.animate = function(styles, speed, callback) {
      var values = [];

      this.elements.forEach(function(element) {
        if (styles) {
          for (var property in styles) {
            if (styles.hasOwnProperty(property)) {
              console.log(styles[property]);
            }
          }
        }
      });
    };

    function animate(opts) {

      var start = new Date();

      var id = setInterval(function() {
        var timePassed = new Date - start;
        var progress = timePassed / opts.duration;

        if (progress > 1) progress = 1;

        var delta = opts.delta(progress);
        opts.step(delta);

        if (progress === 1) {
          clearInterval(id);
        }
      }, opts.delay || 10);

    }


    function move(element, delta, duration) {
      var to = 500;

      animate({
        delay: 10,
        duration: duration || 1000, // 1 sec by default
        delta: delta,
        step: function(delta) {
          element.style.left = to * delta + "px";
        }
      });

    }

})();
