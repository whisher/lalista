(function() {
'use strict';

function config($stateProvider, $urlRouterProvider) {
    $stateProvider

  // Each tab has its own nav history stack:

  .state('tab.signin', {
    url: '/signin',
    views: {
      'tab-home': {
        templateUrl: 'user/templates/signin.html',
        controller: 'UserSignInController as user'
      }
    }
  })
  .state('tab.register', {
    url: '/register',
    views: {
      'tab-home': {
        templateUrl: 'user/templates/register.html',
        controller: 'UserRegisterController as user'
        }
    }
  });
 

}

angular.module('user.routes', [])
    .config(config);
})();
