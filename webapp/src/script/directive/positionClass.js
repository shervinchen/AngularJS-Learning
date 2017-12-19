'use strict';

app.directive('appPositionClass', [function() {
  return {
    templateUrl: 'view/template/positionClass.html',
    restrict: 'ECAM',
    replace: true
  };
}]);
