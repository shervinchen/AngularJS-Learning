var myApp = angular.module("myApp",[]);

// 自定义工厂
myApp.factory("Data", function() {
	return {
		message: '共享的数据'
	};
});

myApp.controller('firstController', ['$scope','Data',
	function($scope,Data) {
		$scope.data = {
			name: '张三'
		};
		$scope.Data = Data;
	}
]);

myApp.controller('secondController', ['$scope','Data',
	function($scope,Data) {
		// 不推荐
		$scope.data = $scope.$$prevSibling.data;

		// 推荐使用factory和service共享数据
		$scope.Data = Data;
	}
]);