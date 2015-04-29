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
        templateUrl: 'starter/templates/tab-home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      }
    }
  })

  .state('tab.food', {
    url: '/food',
    views: {
      'tab-food': {
        templateUrl: 'starter/templates/tab-food.html',
        controller: 'FoodController',
        controllerAs: 'food'
      }
    }
  });

 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

}

angular.module('starter.routes', [])
    .config(config);
})();
