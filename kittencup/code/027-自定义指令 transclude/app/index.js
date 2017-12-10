var myApp = angular.module("myApp", []);

myApp.directive('customTags', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		template: '<div>新数据 <span ng-transclude></span></div>',
		transclude: true, // 指定元素中的原来的子节点移动到一个新模板内部
		replace: true // 将标签也替换成template的值
	};
});

// 当在一个标签上同时存在多个指令时 只能有一个template
myApp.directive('customTags2', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		priority: -1,
		replace: true // 将标签也替换成template的值
	};
});

myApp.directive('customTags3', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		template: '<div>3</div>',
		priority: 0,
		terminal: true, // 小于0的directive都不会执行
		replace: true // 将标签也替换成template的值
	};
});

// 显式的依赖注入
myApp.controller('firstController', ['$scope',
	function($scope) {
		$scope.name = "张三";
	}
]);