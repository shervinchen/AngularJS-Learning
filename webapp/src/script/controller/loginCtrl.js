'use strict';

app.controller('loginCtrl', ['cache', '$state', '$http', '$scope',
  function(cache, $state, $http, $scope) {
	$scope.submit = function() {
		$http.post('data/login.json', $scope.user).then(function(response){
			cache.put('id', response.data.id);
			cache.put('name', response.data.name);
			cache.put('image', response.data.image);
			$state.go('main');
		}, function(response) {});
	};
  }
]);
