var myApp = angular.module("myApp",[]);

// myApp.factory('CustomFactory',function($window){
// 	return $window;
// });

myApp.factory('CustomFactory', ['$window',
	function($window){
		return $window;
	}
]);

// 隐式的依赖注入
myApp.controller('firstController', function($scope,CustomFactory){
	console.log(CustomFactory);
});

// 显式的依赖注入
myApp.controller('secondController', ['$scope',
	function($scope) {
		
	}
]);

// 不属于myApp
function otherController($scope) {
	console.log($scope);
}