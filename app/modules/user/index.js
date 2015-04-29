(function() {
'use strict';
var AUTH_EVENTS = {
 	authenticated: 'authenticated'
}
function run($rootScope, UserToken) {
	var token = UserToken.get();
  	console.log(token);
  	if(token){ 
    		var bool = UserToken.isExpired();
    		if(bool){
      			token = undefined;
      			logout();
    		}
    
  	}
  	$rootScope.global.token =  token; 
}
angular.module('user', [
	'templates',
	'user.services',
	'user.controllers',
  	'user.routes'
])
	.constant('AUTH_EVENTS', AUTH_EVENTS);

})();