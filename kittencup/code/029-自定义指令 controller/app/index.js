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
				alert('test');
			}
		},
		controllerAs: 'bookListController',
		template: '<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
		link: function(scope, iElement, iAttrs, bookListController) {
			iElement.on('click', bookListController.addBook);
		},
		replace: true // 将标签也替换成template的值
	};
});

// 显式的依赖注入
myApp.controller('firstController', ['$scope',
	function($scope) {

		
	}
]);