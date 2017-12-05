// 创建一个模块
var firstApp = angular.module("firstApp",[]);
// 模块的配置
firstApp.provider("CustomService", function() {
	return {
		$get: function() {
			return {
				message: 'CustomService Message'
			};
		}
	};
});

firstApp.controller('firstController', ['$scope','CustomService',
	function($scope,CustomService) {
		console.log(CustomService);
	}
]);
