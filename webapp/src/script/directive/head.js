'use strict';

app.directive('appHead', ['cache', function(cache) {
  return {
    templateUrl: 'view/template/head.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {
      $scope.name = cache.get('name') || '';
    }
  };
}]);
