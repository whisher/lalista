(function() {
'use strict';

function config($stateProvider, $urlRouterProvider) {
    $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "starter/templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'starter/templates/home.html',
        controller: 'HomeController as home'
      }
    }
  });

  

 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

}

angular.module('starter.routes', [])
    .config(config);
})();
