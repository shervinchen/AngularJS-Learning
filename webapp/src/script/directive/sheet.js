'use strict';

app.directive('appSheet', [function() {
  return {
    templateUrl: 'view/template/sheet.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
    	list: '=',
    	visible: '=',
    	select: '&'
    }
  };
}]);
