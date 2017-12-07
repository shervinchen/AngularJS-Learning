var myApp = angular.module("myApp",[]);

// 显式的依赖注入
myApp.controller('firstController', ['$scope',
	function($scope) {
		$scope.status = false;
		$scope.changeStatus = function(event) {
			// console.log(event.target);
			$scope.status = !$scope.status;
			// 通过element转换成jquery对象
			angular.element(event.target).html('切换状态'+!$scope.status);
		};

		$scope.defaultStyle = {'color':'red','margin-top':'50px'};
		$scope.src = "http://www.angularjs.org/img.AngularJS-large.png";
	}
]);