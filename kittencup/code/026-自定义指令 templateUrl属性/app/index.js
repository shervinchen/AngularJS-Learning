var myApp = angular.module("myApp", []);

myApp.directive('customTags', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		templateUrl: 'temp/other.html',
		replace: true // 将标签也替换成template的值
	};
});

myApp.directive('customTags2', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		templateUrl: 'customTags2',
		replace: true // 将标签也替换成template的值
	};
});

// 显式的依赖注入
myApp.controller('firstController', ['$scope',
	function($scope) {
		$scope.name = "张三";
	}
]);