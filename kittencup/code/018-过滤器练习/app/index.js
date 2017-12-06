var product = angular.module("product",[]);

product.service("productData", function() {
	return [
		{
			id:3333,
			name:'iphone',
			price: 5400
		},
		{
			id:3333,
			name:'iphone',
			price: 5400
		},
		{
			id:3333,
			name:'iphone',
			price: 5400
		},
	];
});

product.controller('productController', ['$scope','Data','$filter',
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