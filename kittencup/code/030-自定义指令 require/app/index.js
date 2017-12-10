var myApp = angular.module("myApp", []);

myApp.directive('bookList', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		controller: function($scope) {
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
			this.addBook = function() {
				$scope.$apply(function(){
					$scope.books.push({
						name: 'AngularJS'
					});
				});
			}
		},
		controllerAs: 'bookListController',
		template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
		replace: true // 将标签也替换成template的值
	};
});

myApp.directive('bookAdd', function() {
	return {
		restrict: 'ECAM',
		require: '^bookList', // 往上一级寻找
		template: '<button type="button">添加</button>',
		link: function(scope, iElement, iAttrs, bookListController) {
			iElement.on('click', bookListController.addBook);
		},
		replace: true
	};
});

// 显式的依赖注入
myApp.controller('firstController', ['$scope',
	function($scope) {

		
	}
]);