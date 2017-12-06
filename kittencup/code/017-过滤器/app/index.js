var myApp = angular.module("myApp",[]);

// 自定义工厂
myApp.factory("Data", function() {
	return {
		message: 'Hello World',
		city: [
			{
				name: '上海',
				py: 'shanghai'
			},
			{
				name: '北京',
				py: 'beijing'
			},
			{
				name: '四川',
				py: 'sichuan'
			}
		]
	};
});

myApp.controller('firstController', ['$scope','Data','$filter',
	function($scope,Data,$filter) {
		$scope.data = Data;
		$scope.today = new Date();

		// 过滤器
		var number = $filter('number')('3000');
		console.log(number);

		var json = $filter('json')($scope.data); // json格式化主要用于调试
		console.log(json);

		// 会将city数组中的每个对象传递过来
		$scope.checkName = function(obj) {
			console.log(obj);
			if (obj.py.indexOf('h') == -1) {
				return true;
			} else {
				return false;
			}
		};
	}
]);