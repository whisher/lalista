angular.module("templates", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("starter/templates/tab-food.html", '<ion-view>\n<ion-nav-title>\n      <h1><i class="icon ion-android-restaurant tab-item-active"></i></h1>\n    </ion-nav-title>\n  <ion-content class="padding">\n    <div class="card">\n  <div class="item item-text-wrap">\n    Food This is a basic Card which contains an item that has wrapping text.\n  </div>\n</div>\n  </ion-content>\n</ion-view>\n'), 
    $templateCache.put("starter/templates/tab-home.html", '<ion-view>\n  <ion-nav-title>\n        <h1><i class="icon ion-android-home"></i></h1>\n  </ion-nav-title>\n  <ion-content>\n    <h1>Benvenuto</h1>\n    <ul class="list">\n      <li class="item">\n        <a class="button button-block button-positive icon icon-left ion-person" href="#/tab/signin">SignIn</a>  \n      </li>\n      <li class="item">\n        <a class="button button-block button-positive icon icon-left ion-person-add" href="#/tab/register">Register</a>  \n      </li>\n    </ul>\n  </ion-content>\n</ion-view>\n'), 
    $templateCache.put("starter/templates/tabs.html", '<!--\nCreate tabs with an icon and label, using the tabs-positive style.\nEach tab\'s child <ion-nav-view> directive will have its own\nnavigation history that also transitions its views in and out.\n\n<ion-tabs class="tabs-icon-top tabs-color-active-positive">\n  \n  <ion-tab title="Status" icon-off="ion-ios-pulse" icon-on="ion-ios-pulse-strong" href="#/tab/dash">\n    <ion-nav-view name="tab-dash"></ion-nav-view>\n  </ion-tab>\n</ion-tabs>\n-->\n<ion-tabs class="tabs-icon-top tabs-balanced tabs-color-active-stable">\n\n  <ion-tab title="Home" icon="ion-android-home" href="#/tab/home">\n    <ion-nav-view name="tab-home"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title="Food" icon="ion-android-restaurant" href="#/tab/food">\n    <ion-nav-view name="tab-food"></ion-nav-view>\n  </ion-tab>\n\n  \n  </ion-tab>\n\n</ion-tabs>\n\n'), 
    $templateCache.put("user/templates/register.html", '<ion-view title="User">\n	<ion-nav-title>\n	      <h1><i class="icon ion-person-add"></i></h1>\n	</ion-nav-title>\n	<ion-content class="padding">\n		<form name="form" data-ng-submit="user.save()" novalidate>\n			<div class="list list-inset">\n		          		<label class="item item-input">\n		              		<input type="text" placeholder="Username" required="required" data-ng-minlength="3" data-ng-maxlength="10" ng-model="user.data.username">\n		          		</label>\n		          		<label class="item item-input">\n		              		<input type="email" placeholder="Email"  required="required"  ng-model="user.data.email">\n		          		</label>\n		          		<label class="item item-input">\n		              		<input type="password" placeholder="Password"  required="required" ng-model="user.data.password">\n		          		</label>\n		          		<label class="item item-input">\n		              		<input type="password" placeholder="Retype password"  required="required"  ng-model="user.data.password_confirmation">\n		          		</label>\n		      	</div>\n		      	<button type="submit" class="button button-block button-calm" data-ng-disabled="form.$invalid">Signin</button>\n		 </form>\n	</ion-content>\n</ion-view>\n'), 
    $templateCache.put("user/templates/signin.html", '<ion-view>\n	<ion-nav-title>\n	      <h1><i class="icon ion-person"></i></h1>\n	</ion-nav-title>\n	<ion-content class="padding">\n		<form name="form" data-ng-submit="user.save()" novalidate>\n			<div class="list list-inset">\n		         		<label class="item item-input">\n		              		<input type="text" placeholder="Username or email" required="required" data-ng-minlength="3" data-ng-maxlength="10" ng-model="user.data.credential">\n		          		</label>\n		          		<label class="item item-input">\n		              		<input type="password" placeholder="Password" ng-model="user.data.password">\n		          		</label>\n		       	</div>\n		      	<button class="button button-block button-calm" ng-click="user.save()"  data-ng-disabled="form.$invalid">Signin</button>\n		</form>\n	  </ion-content>\n</ion-view>\n');
} ]), function() {
    "use strict";
    function config($ionicConfigProvider) {
        $ionicConfigProvider.tabs.position("bottom");
    }
    function run($ionicPlatform) {
        $ionicPlatform.ready(function() {
            window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard && cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0), 
            window.StatusBar && StatusBar.styleLightContent();
        });
    }
    var API_HOST = "http://localhost:3000";
    config.$inject = [ "$ionicConfigProvider" ], run.$inject = [ "$ionicPlatform" ], 
    angular.module("app", [ "ionic", "starter", "user" ]).constant("API_HOST", API_HOST).config(config).run(run);
}(), function() {
    "use strict";
    angular.module("starter", [ "templates", "starter.controllers", "starter.routes" ]);
}(), function() {
    "use strict";
    angular.module("user", [ "templates", "user.services", "user.controllers", "user.routes" ]);
}(), function() {
    "use strict";
    function HomeController() {
    }
    function FoodController() {
    }
    angular.module("starter.controllers", []).controller("HomeController", HomeController).controller("FoodController", FoodController);
}(), function() {
    "use strict";
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state("tab", {
            url: "/tab",
            "abstract": !0,
            templateUrl: "starter/templates/tabs.html"
        }).state("tab.home", {
            url: "/home",
            views: {
                "tab-home": {
                    templateUrl: "starter/templates/tab-home.html",
                    controller: "HomeController",
                    controllerAs: "home"
                }
            }
        }).state("tab.food", {
            url: "/food",
            views: {
                "tab-food": {
                    templateUrl: "starter/templates/tab-food.html",
                    controller: "FoodController",
                    controllerAs: "food"
                }
            }
        }), $urlRouterProvider.otherwise("/tab/home");
    }
    config.$inject = [ "$stateProvider", "$urlRouterProvider" ], angular.module("starter.routes", []).config(config);
}(), function() {
    "use strict";
    function UserSignInController($rootScope, $state, Users) {
        var user = this;
        user.data = {}, user.error = void 0, user.save = function() {
            Users.signin(user.data).then(function(response) {
                $state.go("home");
            })["catch"](function(response) {
                user.error = response.data.message;
            });
        };
    }
    function UserRegisterController($rootScope, $state, Users) {
        var user = this;
        user.data = {}, user.save = function() {
            Users.register(user.data).then(function(response) {
                $state.go("tab.home");
            })["catch"](function(response) {
                user.error = response.data.message;
            });
        };
    }
    UserSignInController.$inject = [ "$rootScope", "$state", "Users" ], UserRegisterController.$inject = [ "$rootScope", "$state", "Users" ], 
    angular.module("user.controllers", []).controller("UserSignInController", UserSignInController).controller("UserRegisterController", UserRegisterController);
}(), function() {
    "use strict";
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state("tab.signin", {
            url: "/signin",
            views: {
                "tab-home": {
                    templateUrl: "user/templates/signin.html",
                    controller: "UserSignInController as user"
                }
            }
        }).state("tab.register", {
            url: "/register",
            views: {
                "tab-home": {
                    templateUrl: "user/templates/register.html",
                    controller: "UserRegisterController as user"
                }
            }
        });
    }
    config.$inject = [ "$stateProvider", "$urlRouterProvider" ], angular.module("user.routes", []).config(config);
}(), function() {
    "use strict";
    function Users(API_HOST, $http) {
        return {
            signin: function(data) {
                return $http.post(API_HOST + "/api/auth", data);
            },
            register: function(data) {
                return $http.post(API_HOST + "/api/user", data);
            }
        };
    }
    Users.$inject = [ "API_HOST", "$http" ], angular.module("user.services", []).factory("Users", Users);
}();
//# sourceMappingURL=scripts.js.map