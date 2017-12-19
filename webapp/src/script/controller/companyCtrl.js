'use strict';

app.controller('companyCtrl', ['$http', '$state', '$scope',
  function($http, $state, $scope) {
    $http.get('/data/company.json?id='+$state.params.id).then(function(response) {
      $scope.company = response.data;
    }).catch(function(response) {});
  }
]);
