(function() {
'use strict';

function HomeController() {
    var home = this; 
    
 }
function FoodController() {
    var food = this; 
   
 }
 
angular.module('starter.controllers', [])
	.controller('HomeController', HomeController)
	.controller('FoodController', FoodController);
})();
