// 创建一个模块
var firstApp = angular.module("firstApp",[]);
// 模块的配置
firstApp.provider("CustomProvider", function() {
	return {
		$get: function() {
			return {
				message: 'CustomProvider Message'
			};
		}
	};
});

// 自定义工厂
firstApp.factory("CustomFactory", function() {
	return [1,2,3,4,5];
});

// 自定义服务
firstApp.service("CustomService", function() {
	// 对自定义服务而言 返回的东西必须是对象
	return ['上海'];
});

firstApp.controller('firstController', ['$scope','CustomService',
	function($scope,CustomService) {
		console.log(CustomService);
	}
]);
