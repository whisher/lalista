(function() {
'use strict';

function UserSignInController($rootScope, $state, Users, AUTH_EVENTS) {
	var user = this;
	user.data = {};
	user.error  = undefined;
    	user.save = function() {
    		Users.signin(user.data).then(function(response) {
			$rootScope.$emit(AUTH_EVENTS.authenticated, response.data.token);
			$state.go('tab.home');
		})
		.catch(function(response) {
			user.error = response.data.message;
		});
	};
}
function UserRegisterController($rootScope, $state, Users, AUTH_EVENTS) {
	var user = this; 
	user.data = {};
	user.error  = undefined;
	user.save = function() {
		Users.register(user.data).then(function(response) {
			$rootScope.$emit(AUTH_EVENTS.authenticated, response.data.token);
			$state.go('tab.home');
		})
		.catch(function(response) {
			user.error = response.data.message;
		});
	};
}
angular.module('user.controllers', [])
	.controller('UserSignInController', UserSignInController)
	.controller('UserRegisterController', UserRegisterController);
})();
