var firstApp = angular.module("firstApp",[]);

firstApp.controller('firstController', ['$scope',
	function($scope) {
		$scope.name = '张三';
	}
]);

firstApp.controller('secondController', ['$scope',
	function($scope) {
		$scope.name = '李四';
	}
]);