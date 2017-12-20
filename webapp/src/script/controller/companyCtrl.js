'use strict';

app.controller('companyCtrl', ['$http', '$state', '$scope',
  function($http, $state, $scope) {
    $http.get('/data/company.json?id='+$state.params.id).then(function(response) {
		$scope.company = response.data;
		// 把广播放在请求中  让广播在指令加载完成后再执行 起到延迟的作用
		// $scope.$broadcast('abc', {id: 1});
    }).catch(function(response) {});
	// $scope.$on('cba', function(event, data) {
	// 	console.log(event, data);
	// });
  }
]);
