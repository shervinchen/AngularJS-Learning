'use strict';

app.controller('searchCtrl', ['$http', '$scope',
	function($http, $scope) {
		$http.get('/data/positionList.json').then(function(response) {
			$scope.positionList = response.data;
	    }).catch(function(response) {});
	}
]);
