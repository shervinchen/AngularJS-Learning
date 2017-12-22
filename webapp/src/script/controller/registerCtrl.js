'use strict';

app.controller('registerCtrl', ['$interval', '$http', '$scope', '$state',
  function($interval, $http, $scope, $state) {
	$scope.submit = function() {
		$http.post('data/regist.json', $scope.user).then(function(response){
			$state.go('login');
		}, function(response) {});
	};
	var count = 60;
	$scope.send = function() {
		$http.get('/data/code.json').then(function(response) {
	      if (response.data.state === 1) {
	      	count = 60;
	      	$scope.time = '60s';
	      	var interval = $interval(function() {
	      		if (count<=0) {
	      			$interval.cancel(interval);
	      			$scope.time = '';
	      		} else {
		      		count--;
		      		$scope.time = count + 's';
	      		}
	      	}, 1000);
	      }
	    }).catch(function(response) {});
	};
  }
]);
