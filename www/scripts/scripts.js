angular.module("templates", []).run([ "$templateCache", function($templateCache) {
    $templateCache.put("menu/templates/index.html", '<ion-view view-title="Menu">\n	<ion-content class="padding">\n		<h1>pippo</h1>\n		<ul class="list">\n      		<li class="item" ng-repeat="tag in menu.tags track by $index">\n        		<a class="button button-block" ng-href="#/tab/menu/{{::tag}}">{{::tag}}</a>  \n      		</li>\n    		</ul>\n	  </ion-content>\n</ion-view>\n'), 
    $templateCache.put("menu/templates/tag.html", '<ion-view view-title="Menu List">\n	<ion-content class="padding">\n		<h1>pippo</h1>\n		<ul class="list">\n      		<li class="item">\n        		\n      		</li>\n    		</ul>\n    		<div class="list" ng-repeat="item in menu.items track by $index">\n\n    <div class="item item-thumbnail-left">\n      <img src="cover.jpg">\n      <h2>Pretty Hate Machine</h2>\n      <p>Nine Inch Nails</p>\n    </div>\n\n    ...\n\n</div>\n	  </ion-content>\n</ion-view>\n'), 
    $templateCache.put("starter/templates/home.html", '<ion-view  view-title="Home">\n  <!-- <ion-nav-title>\n        <h1><i class="icon ion-android-home"></i></h1>\n  </ion-nav-title> -->\n  <ion-content>\n    <h1>Benvenuto</h1>\n    <ul class="list" ng-if="!global.token">\n      <li class="item">\n        <a class="button button-block button-energized icon icon-left ion-android-person" href="#/tab/signin">SignIn</a>  \n      </li>\n      <li class="item">\n        <a class="button button-block button-energized icon icon-left ion-android-person-add" href="#/tab/register">Register</a>  \n      </li>\n    </ul>\n    \n  </ion-content>\n</ion-view>\n'), 
    $templateCache.put("starter/templates/tabs.html", '<!--\nCreate tabs with an icon and label, using the tabs-positive style.\nEach tab\'s child <ion-nav-view> directive will have its own\nnavigation history that also transitions its views in and out.\n\n<ion-tabs class="tabs-icon-top tabs-color-active-positive">\n  \n  <ion-tab title="Status" icon-off="ion-ios-pulse" icon-on="ion-ios-pulse-strong" href="#/tab/dash">\n    <ion-nav-view name="tab-dash"></ion-nav-view>\n  </ion-tab>\n</ion-tabs>\n-->\n<ion-tabs class="tabs-icon-top tabs-balanced tabs-color-active-stable">\n\n  <ion-tab title="Home" icon="ion-android-home" href="#/tab/home">\n    <ion-nav-view name="tab-home"></ion-nav-view>\n  </ion-tab>\n\n  <ion-tab title="Food" icon="ion-android-restaurant" href="#/tab/menu">\n    <ion-nav-view name="tab-menu"></ion-nav-view>\n  </ion-tab>\n\n  \n  </ion-tab>\n\n</ion-tabs>\n\n'), 
    $templateCache.put("user/templates/error.html", '<div  class="form-group form-no-required" data-ng-if="error">\n	<p  class="alert alert-danger" data-ng-bind="error"></p>\n</div>\n'), 
    $templateCache.put("user/templates/register.html", '<ion-view view-title="Register">\n	<!-- <ion-nav-title>\n	      <h1><i class="icon ion-person-add"></i></h1>\n	</ion-nav-title> -->\n	<ion-content class="padding">\n		<form name="form" data-ng-submit="user.save()" novalidate>\n			<div class="list list-inset">\n		          		<label class="item item-input">\n		          		<i class="icon ion-android-person placeholder-icon"></i>\n		              		<input type="text" placeholder="Username" required="required" data-ng-minlength="3" data-ng-maxlength="10" ng-model="user.data.username">\n		          		</label>\n		          		<label class="item item-input">\n		          		<i class="icon ion-android-mail placeholder-icon"></i>\n		              		<input type="email" placeholder="Email"  required="required"  ng-model="user.data.email">\n		          		</label>\n		          		<label class="item item-input">\n		          		<i class="icon ion-key placeholder-icon"></i>\n		              		<input type="password" placeholder="Password"  required="required" ng-model="user.data.password">\n		          		</label>\n		          		<label class="item item-input">\n		          		<i class="icon ion-key placeholder-icon"></i>\n		              		<input type="password" placeholder="Retype password"  required="required"  ng-model="user.data.password_confirmation">\n		          		</label>\n		      	</div>\n		      	<button type="submit" class="button button-block button-energized" data-ng-disabled="form.$invalid">Signin</button>\n		  <div show-error error="user.error"></div>\n		 </form>\n	</ion-content>\n</ion-view>\n'), 
    $templateCache.put("user/templates/signin.html", '<ion-view view-title="Signin">\n	<!-- <ion-nav-title>\n	      <h1><i class="icon ion-person"></i></h1>\n	</ion-nav-title> -->\n	<ion-content class="padding">\n		<form name="form" data-ng-submit="user.save()" novalidate>\n			<div class="list list-inset">\n		         		<label class="item item-input">\n		         		<i class="icon ion-android-person placeholder-icon"></i>\n		              		<input type="text" placeholder="Username or email" required="required" data-ng-minlength="3" data-ng-maxlength="10" ng-model="user.data.credential">\n		          		</label>\n		          		<label class="item item-input">\n		          		<i class="icon ion-key placeholder-icon"></i>\n		              		<input type="password" placeholder="Password" ng-model="user.data.password">\n		          		</label>\n		       	</div>\n		      	<button class="button button-block button-energized" ng-click="user.save()"  data-ng-disabled="form.$invalid">Signin</button>\n		      	<div show-error error="user.error"></div>\n		</form>\n	  </ion-content>\n</ion-view>\n');
} ]), function() {
    "use strict";
    function run($window, $rootScope, $state, AUTH_EVENTS, UserToken) {
        function logout() {
            UserToken.del(), delete $rootScope.global.token, $state.go("tab.home", {}, {
                reload: !0
            });
        }
        var token = UserToken.get();
        if (token) {
            var bool = UserToken.isExpired();
            bool && (token = void 0, logout());
        }
        $rootScope.global.token = token, $rootScope.$on(AUTH_EVENTS.unauthorized, function(event, data) {
            logout(), $state.go("session.signin", {}, {
                reload: !0
            });
        }), $rootScope.$on(AUTH_EVENTS.forbidden, function(event, data) {
            UserToken.del(), $state.go("session.signin", {}, {
                reload: !0
            });
        }), $rootScope.$on(AUTH_EVENTS.authenticated, function(event, data) {
            UserToken.set(data), $rootScope.global.token = UserToken.get();
        }), $rootScope.global.logout = function() {
            logout();
        };
    }
    run.$inject = [ "$window", "$rootScope", "$state", "AUTH_EVENTS", "UserToken" ], 
    angular.module("auth", [ "ngStorage", "angular-jwt", "auth.services", "auth.routes" ]).run(run);
}(), function() {
    "use strict";
    angular.module("menu", [ "templates", "menu.services", "menu.controllers", "menu.routes" ]);
}(), function() {
    "use strict";
    function run($rootScope) {
        $rootScope.global = {};
    }
    run.$inject = [ "$rootScope" ], angular.module("starter", [ "templates", "starter.controllers", "starter.routes" ]).run(run);
}(), function() {
    "use strict";
    angular.module("user", [ "templates", "user.directives", "user.services", "user.controllers", "user.routes" ]);
}(), function() {
    "use strict";
    function config($stateProvider, $httpProvider) {
        $stateProvider.state("auth", {
            "abstract": !0,
            template: "<ui-view/>",
            resolve: {}
        }), $httpProvider.interceptors.push("HttpInterceptor");
    }
    config.$inject = [ "$stateProvider", "$httpProvider" ], angular.module("auth.routes", []).config(config);
}(), function() {
    "use strict";
    function UserToken($localStorage, jwtHelper) {
        return {
            set: function(token) {
                $localStorage.token = token;
            },
            get: function() {
                var token = $localStorage.token;
                return token ? jwtHelper.decodeToken(token) : void 0;
            },
            del: function() {
                $localStorage.$reset();
            },
            isExpired: function() {
                var token = $localStorage.token;
                return token ? jwtHelper.isTokenExpired(token) : !0;
            },
            hasScope: function(scope) {
                var token = $localStorage.token;
                return token ? -1 !== jwtHelper.decodeToken(token).scope.indexOf(scope) : !1;
            }
        };
    }
    function HttpInterceptor($rootScope, $q, UserToken, AUTH_EVENTS) {
        return {
            request: function(config) {
                var token = UserToken.get();
                return config.requestTimestamp = new Date().getTime(), config.headers = config.headers || {}, 
                token && (config.headers.Authorization = "Bearer " + token), config;
            },
            response: function(response) {
                return response.config.responseTimestamp = new Date().getTime(), response;
            },
            responseError: function(rejection) {
                return 401 === rejection.status && $rootScope.$emit(AUTH_EVENTS.unauthorized, rejection), 
                403 === rejection.status && $rootScope.$emit(AUTH_EVENTS.forbidden, rejection), 
                $q.reject(rejection);
            }
        };
    }
    var AUTH_EVENTS = {
        authenticated: "authenticated",
        unauthorized: "unauthorized",
        forbidden: "forbidden"
    };
    UserToken.$inject = [ "$localStorage", "jwtHelper" ], HttpInterceptor.$inject = [ "$rootScope", "$q", "UserToken", "AUTH_EVENTS" ], 
    angular.module("auth.services", []).constant("AUTH_EVENTS", AUTH_EVENTS).factory("UserToken", UserToken).factory("HttpInterceptor", HttpInterceptor);
}(), function() {
    "use strict";
    function MenuController(tags) {
        var menu = this;
        menu.tags = tags.data, console.log(menu.tags);
    }
    function MenuTagController(items) {
        var menu = this;
        menu.items = items.data, console.log(menu.items);
    }
    MenuController.$inject = [ "tags" ], MenuTagController.$inject = [ "items" ], angular.module("menu.controllers", []).controller("MenuController", MenuController).controller("MenuTagController", MenuTagController);
}(), function() {
    "use strict";
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state("tab.menu", {
            url: "/menu",
            views: {
                "tab-menu": {
                    templateUrl: "menu/templates/index.html",
                    controller: "MenuController as menu",
                    resolve: {
                        tags: [ "Menu", function(Menu) {
                            return Menu.tags();
                        } ]
                    }
                }
            }
        }).state("tab.tag", {
            url: "/menu/:tag",
            views: {
                "tab-menu": {
                    templateUrl: "menu/templates/tag.html",
                    controller: "MenuTagController as menu",
                    resolve: {
                        items: [ "Menu", "$stateParams", function(Menu, $stateParams) {
                            return Menu.tag($stateParams.tag);
                        } ]
                    }
                }
            }
        });
    }
    config.$inject = [ "$stateProvider", "$urlRouterProvider" ], angular.module("menu.routes", []).config(config);
}(), function() {
    "use strict";
    function Menu($http, API_HOST) {
        return {
            tags: function() {
                return $http.get(API_HOST + "/api/tags");
            },
            tag: function(tag) {
                return $http.get(API_HOST + "/api/tags/" + tag);
            }
        };
    }
    Menu.$inject = [ "$http", "API_HOST" ], angular.module("menu.services", []).factory("Menu", Menu);
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
                    templateUrl: "starter/templates/home.html",
                    controller: "HomeController as home"
                }
            }
        }), $urlRouterProvider.otherwise("/tab/home");
    }
    config.$inject = [ "$stateProvider", "$urlRouterProvider" ], angular.module("starter.routes", []).config(config);
}(), function() {
    "use strict";
    function UserSignInController($rootScope, $state, Users, AUTH_EVENTS) {
        var user = this;
        user.data = {}, user.error = void 0, user.save = function() {
            Users.signin(user.data).then(function(response) {
                $rootScope.$emit(AUTH_EVENTS.authenticated, response.data.token), $state.go("tab.home");
            })["catch"](function(response) {
                user.error = response.data.message;
            });
        };
    }
    function UserRegisterController($rootScope, $state, Users, AUTH_EVENTS) {
        var user = this;
        user.data = {}, user.error = void 0, user.save = function() {
            Users.register(user.data).then(function(response) {
                $rootScope.$emit(AUTH_EVENTS.authenticated, response.data.token), $state.go("tab.home");
            })["catch"](function(response) {
                user.error = response.data.message;
            });
        };
    }
    UserSignInController.$inject = [ "$rootScope", "$state", "Users", "AUTH_EVENTS" ], 
    UserRegisterController.$inject = [ "$rootScope", "$state", "Users", "AUTH_EVENTS" ], 
    angular.module("user.controllers", []).controller("UserSignInController", UserSignInController).controller("UserRegisterController", UserRegisterController);
}(), function() {
    "use strict";
    function showError($templateCache) {
        return {
            restrict: "AE",
            scope: {
                error: "="
            },
            template: $templateCache.get("user/templates/error.html"),
            link: function(scope, elm, attrs) {}
        };
    }
    showError.$inject = [ "$templateCache" ], angular.module("user.directives", []).directive("showError", showError);
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
    function Users($http, API_HOST) {
        return {
            signin: function(data) {
                return $http.post(API_HOST + "/api/auth", data);
            },
            register: function(data) {
                return $http.post(API_HOST + "/api/user", data);
            }
        };
    }
    var AUTH_EVENTS = {
        authenticated: "authenticated",
        unauthorized: "unauthorized"
    };
    Users.$inject = [ "$http", "API_HOST" ], angular.module("user.services", []).constant("AUTH_EVENTS", AUTH_EVENTS).factory("Users", Users);
}(), function() {
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
    angular.module("app", [ "ionic", "ngStorage", "starter", "auth", "user", "menu" ]).constant("API_HOST", API_HOST).config(config).run(run);
}();
//# sourceMappingURL=scripts.js.map