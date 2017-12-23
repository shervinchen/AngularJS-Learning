'use strict';

app.directive('appPositionInfo', ['$http', function($http) {
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
      $scope.$watch('pos', function (newVal) {
        if (newVal) {
          $scope.pos.select = $scope.pos.select || false;
          $scope.imagePath = $scope.pos.select ? 'image/star-active.png' : 'image/star.png';
        }
      });
      $scope.favorite = function () {
        $http.post('data/favorite.json', {
          id: $scope.pos.id,
          select: !$scope.pos.select
        }).then(function(response){
          $scope.pos.select = !$scope.pos.select;
          $scope.imagePath = $scope.pos.select ? 'image/star-active.png' : 'image/star.png';
        }, function(response) {});
      }
    }
  };
}]);
