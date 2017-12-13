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
		},
		{
			title: "no2",
			content: "no2-content2"
		}
	];
});

myApp.directive('csdGroup', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		template: '<div class="panel-group" ng-transclude></div>',
		transclude: true,
		replace: true,
		controllerAs: 'csdGroupController',
		controller: function() {
			this.groups = []; // 保存所有csdCollapse的scope
			this.closeOtherCollapse = function(nowScope) {
				angular.forEach(this.groups, function(scope) {
					if (scope !== nowScope) {
						scope.isOpen = false;
					}
				});
			};
		}
	};
});

myApp.directive('csdCollapse', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		templateUrl: 'app/temp/csdCollapse.html',
		replace: true,
		transclude: true,
		scope: {
			heading: '@' // 简写@相当于@heading
		},
		require: '^csdGroup', // 访问另一个controller
		link: function(scope, element, attrs, csdGroupController) {
			scope.isOpen = false;
			scope.changeOpen = function() {
				scope.isOpen = !scope.isOpen;
				csdGroupController.closeOtherCollapse(scope);
			};
			csdGroupController.groups.push(scope);
		}
	};
});

// 显式的依赖注入
myApp.controller('firstController', ['$scope', 'Data',
	function($scope, Data) {
		$scope.data = Data;
	}
]);