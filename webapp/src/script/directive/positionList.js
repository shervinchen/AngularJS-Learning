'use strict';

app.directive('appPositionList', ['$http', function($http) {
  return {
    templateUrl: 'view/template/positionList.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
      data: '=',
      filterObj: '=',
      isFavorite: '='
    },
    link: function ($scope) {
      $scope.select = function (item) {
        $http.post('data/favorite.json', {
          id: item.id,
          select: item.select
        }).then(function(response){
          item.select = !item.select;
        }, function(response) {});
      }
    }
  };
}]);
