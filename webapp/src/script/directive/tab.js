'use strict';

app.directive('appTab', [function() {
  return {
    templateUrl: 'view/template/tab.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
    	list: '=',
    	tabClick: '&'
    },
    link: function($scope) {
    	$scope.click = function(tab) {
    		$scope.selectId = tab.id;
    		$scope.tabClick(tab);
    	};
    }
  };
}]);
