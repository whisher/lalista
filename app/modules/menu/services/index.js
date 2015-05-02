(function() {
  'use strict';

function Menu($http, API_HOST) {
  return {
    tags: function() {
      return $http.get(API_HOST+'/api/tags');
    },
    tag: function(tag) {
      return $http.get(API_HOST+'/api/tags/'+tag);
    }
  };
}

angular.module('menu.services', [])
    .factory('Menu', Menu);
})();