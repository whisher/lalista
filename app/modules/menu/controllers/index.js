(function() {
'use strict';

function MenuController(tags) {
	var menu = this;
	menu.tags = tags.data;
	console.log(menu.tags);
}
function MenuTagController(items) {
	var menu = this; 
	menu.items = items.data;
	console.log(menu.items);
}
angular.module('menu.controllers', [])
	.controller('MenuController', MenuController)
	.controller('MenuTagController', MenuTagController);
})();
