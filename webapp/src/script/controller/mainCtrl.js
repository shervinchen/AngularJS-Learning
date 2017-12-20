'use strict';

app.controller('mainCtrl', ['$http', '$scope',
  function($http, $scope) {
    $http.get('/data/positionList.json').then(function(response) {
      // console.log(response);
      $scope.list = response.data;
    }).catch(function(response) {});
  }
]);
