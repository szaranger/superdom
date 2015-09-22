(function() {
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
