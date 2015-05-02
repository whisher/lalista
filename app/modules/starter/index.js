(function() {
'use strict';
function run($rootScope) {
    $rootScope.global  = {};
}
angular.module('starter', [
	'templates',
	'starter.controllers',
  	'starter.routes'
])
	.run(run);

})();