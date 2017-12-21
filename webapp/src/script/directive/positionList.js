'use strict';

app.directive('appPositionList', [function() {
  return {
    templateUrl: 'view/template/positionList.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
      data: '=',
      filterObj: '='
    }
  };
}]);
