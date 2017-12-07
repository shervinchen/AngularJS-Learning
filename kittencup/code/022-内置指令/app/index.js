var myApp = angular.module("myApp",[]);

// 显式的依赖注入
myApp.controller('firstController', ['$scope',
	function($scope) {
		$scope.status = false;
		$scope.changeStatus = function(event) {
			console.log(event.target);
			$scope.status = !$scope.status;
		};
	}
]);