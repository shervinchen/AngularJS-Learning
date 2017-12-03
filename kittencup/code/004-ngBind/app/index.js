var firstApp = angular.module("firstApp",[]);

firstApp.controller('firstController', ['$scope',
	function($scope) {
		// $scope 叫做作用域
		// 申明一个model
		$scope.name = '张三';
		$scope.age = 20;
	}
]);