// 创建一个模块
var firstApp = angular.module("firstApp",[]);

firstApp.filter('cityFilter', function(){
	return function(data, parent){
		var filterData = [];
		angular.forEach(data, function(obj){
			if (obj.parent === parent) {
				filterData.push(obj);
			}
		});
		return filterData;
	};
});

firstApp.directive('even', function() {
	return {
		require: "ngModel",
		link: function(scope, elem, attrs, ngModelController) {
			// $parsers表示从viewValue向modelValue绑定过程中的处理函数
			ngModelController.$parsers.push(function(viewValue){
				if (viewValue % 2 === 0) {
					ngModelController.$setValidity('even', true);  // 改变的是$error中的值
				} else {
					ngModelController.$setValidity('even', false);
				}
				return viewValue;
			});
			// $formatters表示modelValue向viewValue过程中的处理函数
			ngModelController.$formatters.push(function(modelValue){
				return modelValue + 'csdoker';
			});
		},
		restrict: 'ECAM', // 风格同时实现
		replace: true // 将标签也替换成template的值
	};
});

firstApp.directive('customTextArea', function() {
	return {
		require: "ngModel",
		template: '<div contenteditable="true"></div>',
		link: function(scope, elem, attrs, ngModelController) {
			// view->model
			elem.on('keyup', function(){
				scope.$apply(function(){
					// 当view发生了某件事情时，从view向model绑定
					// 调用$setViewValue把viewValue保存下来
					ngModelController.$setViewValue(elem.html());
				});
			});
			ngModelController.$render = function() {
				elem.html(ngModelController.$viewValue);
			};
		},
		restrict: 'ECAM', // 风格同时实现
		replace: true // 将标签也替换成template的值
	};
});

firstApp.controller('firstController', ['$scope',
	function($scope) {
		var that = this;
		$scope.hobbies = [
			{
				id: 1,
				name: '玩游戏'
			},
			{
				id: 2,
				name: '写代码'
			},
			{
				id: 3,
				name: '睡觉'
			},
		];
		$scope.cities = [
			{
				name: '上海',
				parent: 0,
				id: 1
			},
			{
				name: '上海市',
				parent: 1,
				id: 2
			},
			{
				name: '徐汇区',
				parent: 2,
				id: 8
			},
			{
				name: '长宁区',
				parent: 2,
				id: 3
			},
			{
				name: '北京',
				parent: 0,
				id: 4
			},
			{
				name: '北京市',
				parent: 4,
				id: 5
			},
			{
				name: '东城区',
				parent: 5,
				id: 6
			},
			{
				name: '丰台区',
				parent: 5,
				id: 7
			},
			{
				name: '浙江',
				parent: 0,
				id: 9
			},
			{
				name: '杭州',
				parent: 9,
				id: 100
			},
			{
				name: '宁波',
				parent: 9,
				id: 11
			},
			{
				name: '西湖区',
				parent: 100,
				id: 12
			},
			{
				name: '北仑区',
				parent: 11,
				id: 13
			},
		];
		$scope.data = {
			hobbies: [1, 2],
			city: 3
		};

		// 先保留一份默认值
		$scope.originData = angular.copy($scope.data);
		$scope.reset = function() {
			$scope.data = angular.copy($scope.originData);
			that.initCity();
			$scope.myForm.$setPristine();
		};

		// 让城市关联使用
		this.findCityId = function(parent) {
			var parentId;
			angular.forEach($scope.cities, function(city){
				if (city.id === parent) {
					parentId = city.parent;
					return;
				}
			});
			return parentId;
		};

		this.initCity = function() {
			if ($scope.data.city !== undefined) {
				$scope.data.area = this.findCityId($scope.data.city);
				$scope.data.province = this.findCityId($scope.data.area);
			}
		};

		// 第一次打开页面 需要初始化
		this.initCity.call(this);

		$scope.toggleHobbySelection = function(id) {
			var index;
			if ($scope.data.hobbies === undefined) {
				$scope.data.hobbies = [];
				index = -1;
			} else {
				index = $scope.data.hobbies.indexOf(id);
			}
			if (index === -1) {
				$scope.data.hobbies.push(id);
			} else {
				$scope.data.hobbies.splice(index, 1);
			}
			console.log($scope.data.hobbies);
		};
	}
]);
