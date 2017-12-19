'use strict';

app.directive('appPositionInfo', [function() {
  return {
    templateUrl: 'view/template/positionInfo.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
      isActive: '=',
      isLogin: '=',
      pos: '='
    },
    link: function ($scope) {
      $scope.imagePath = $scope.isActive ? 'image/star-active.png' : 'image/star.png';
    }
  };
}]);
