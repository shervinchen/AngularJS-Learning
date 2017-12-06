var myApp = angular.module("myApp",[]);

// 自定义工厂
myApp.factory("Data", function() {
	return {
		message: '共享的数据'
	};
});

myApp.controller('firstController', ['$scope','Data',
	function($scope,Data) {
		$scope.data = Data;
		$scope.today = new Date();
	}
]);