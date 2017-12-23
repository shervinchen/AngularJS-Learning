'use strict';

app.controller('favoriteCtrl', ['$http', '$scope',
  function($http, $scope) {
    $http.get('/data/myFavorite.json').then(function(response) {
      $scope.list = response.data;
    }).catch(function(response) {});
  }
]);
