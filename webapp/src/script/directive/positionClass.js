'use strict';

app.directive('appPositionClass', [function() {
  return {
    templateUrl: 'view/template/positionClass.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
      com: '='
    },
    link: function ($scope) {
      $scope.showPositionList = function (idx) {
        $scope.positionList = $scope.com.positionClass[idx].positionList;
        $scope.isActive = idx;
      }
      $scope.showPositionList(0);
    }
  };
}]);
