var firstApp = angular.module("firstApp",[]);

firstApp.controller('firstController', ['$scope',
	function($scope) {
		$scope.date = new Date();

		// setInterval(function(){
		// 	// 这里虽然变了 但是并没有触发 脏检查
		// 	$scope.date = new Date();
		// }, 1000);

		// console.log($scope);
		setInterval(function() {
			$scope.$apply(function() {
				$scope.date = new Date();
				// 会去触发脏检查 检查每一个scope下的属性是否有变化
				// 如果有变化 那么对应的model 和 view 就都会变
			});
		}, 1000);

		// ng-controller执行完后也会自动触发脏检查
	}
]);
