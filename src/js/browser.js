(function() {
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
