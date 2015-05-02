(function() {
  'use strict';

var AUTH_EVENTS = {
  authenticated: 'authenticated',
  unauthorized: 'unauthorized'
};

function Users($http, API_HOST) {
  return {
    signin: function(data) {
        return $http.post(API_HOST+'/api/auth', data);
    },
    register: function(data) {
        return $http.post(API_HOST+'/api/user', data); 
    }
  };
}

function UserToken($localStorage, jwtHelper) {
  return {
    set: function(token) {
      $localStorage.token = token;
    },
    get: function() {
      var token = $localStorage.token; 
      if(!token){
        return undefined;
      }
      return jwtHelper.decodeToken(token);
    },
    del: function() {
      $localStorage.$reset();
    },
    isExpired:function(){
      var token =$localStorage.token; 
      if(!token){
        return true;
      }
      return  jwtHelper.isTokenExpired(token);
    },
    hasScope:function(scope){
      var token =$localStorage.token; 
      if(!token){
        return false;
      }
      return jwtHelper.decodeToken(token).scope.indexOf(scope) !== -1;
    }
  };
}

angular.module('user.services', [])
    .constant('AUTH_EVENTS', AUTH_EVENTS)
   .factory('Users', Users);
})();