var firstApp = angular.module("firstApp",[]);

firstApp.controller('firstController', ['$scope',
	function($scope) {
		$scope.name = "张三";
		$scope.data = {
			name: '李四',
			count: 20
		};
		$scope.count = 0;

		$scope.$watch('name', function(newVal, oldVal) {
	        $scope.count++;
	        if ($scope.count > 30) {
	        	$scope.name = "已经大于30次了";
	        }
	    });

		// 要监听一个对象里面具体某个属性的变化需要指定第三个参数为true
	    $scope.$watch('data', function(newVal, oldVal) {
	    	
	    }, true);
	}
]);
