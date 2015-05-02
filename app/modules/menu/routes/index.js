(function() {
'use strict';

function config($stateProvider, $urlRouterProvider) {
    $stateProvider

  // Each tab has its own nav history stack:

  .state('tab.menu', {
    url: '/menu',
    views: {
      'tab-menu': {
        templateUrl: 'menu/templates/index.html',
        controller: 'MenuController as menu',
        resolve:{
              tags : function(Menu){
                return Menu.tags();
              }
        }
      }
    }
  })
  .state('tab.tag', {
    url: '/menu/:tag',
    views: {
      'tab-menu': {
        templateUrl: 'menu/templates/tag.html',
        controller: 'MenuTagController as menu',
        resolve:{
              items : function(Menu,$stateParams){
                return Menu.tag($stateParams.tag);
              }
        }
      }
    }
  });
 

}

angular.module('menu.routes', [])
    .config(config);
})();
