'use strict';

app.directive('appTab', [function() {
  return {
    templateUrl: 'view/template/tab.html',
    restrict: 'ECAM',
    replace: true
  };
}]);
