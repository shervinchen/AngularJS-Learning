var myApp = angular.module("myApp", []);

// 数据
myApp.factory('Data', function() {
	return [
		{
			title: "no1",
			content: "no1-content1"
		},
		{
			title: "no2",
			content: "no2-content2"
		}
	]
});

myApp.directive('csdGroup', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		template: '<div class="panel-group" ng-transclude></div>',
		transclude: true,
		replace: true // 将标签也替换成template的值
	};
});

myApp.directive('csdCollapse', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		templateUrl: 'app/temp/csdCollapse.html',
		replace: true // 将标签也替换成template的值
	};
});

// 显式的依赖注入
myApp.controller('firstController', ['$scope', 'Data',
	function($scope, Data) {
		$scope.data = Data;
	}
]);