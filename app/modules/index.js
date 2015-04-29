(function() {
'use strict';

var API_HOST = 'http://localhost:3000';

function config($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
}
function run($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    $rootScope.global={};
  });
}

angular.module(
  'app', [ 'ionic','' 'starter','user'])
  .constant('API_HOST', API_HOST)
  .config(config)
  .run(run);
 })();







