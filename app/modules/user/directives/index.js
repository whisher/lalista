(function() {
'use strict';


function showError($templateCache) {
  return {
    restrict: 'AE',
    scope:{
      error: '='
    },
    template: $templateCache.get('user/templates/error.html'),
    link: function(scope, elm, attrs) {
    }
  };
}

angular.module('user.directives', [])
   .directive('showError', showError);
    
})();

