'use strict';

app.directive('appHeadBar', [function() {
  return {
    templateUrl: 'view/template/headBar.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
    	text: '@'
    },
    link: function($scope) {
    	$scope.back = function() {
    		window.history.back();
    	};
    }
  };
}]);
