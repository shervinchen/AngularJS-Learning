'use strict';

app.directive('appHead', [function() {
  return {
    templateUrl: 'view/template/head.html',
    restrict: 'ECAM',
    replace: true
  };
}]);
