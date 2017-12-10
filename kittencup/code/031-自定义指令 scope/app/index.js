var myApp = angular.module("myApp", []);

myApp.directive('bookList', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		controller: function($scope) {
			// $scope.books = $scope.a();

			// $scope.books = $scope.b;
			// $scope.b.push({name:'nodejs'});

			console.log($scope.c)
		},
		// scope: false, // scope为false两个controller共享一个scope对象
		// scope: true, // scope为true会创建一个有继承链的独立作用域
		scope: {
			// a: '&books' // 将父元素封装成一个函数
			// b: '=parentBooks' // 子元素与父元素作用域双向绑定
			c: '@parentTitle' // 只能单向读取父元素 不能改变 并且不能为对象类型
		}, // scope为对象也会创建一个独立作用域，但是没有继承链
		controllerAs: 'bookListController',
		template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
		replace: true // 将标签也替换成template的值
	};
});

// 显式的依赖注入
myApp.controller('firstController', ['$scope',
	function($scope) {
		console.log($scope);
		$scope.books = [
			{
				name: 'php'
			},
			{
				name: 'javascript'
			},
			{
				name: 'java'
			}
		];
		$scope.title = '张三';
	}
]);