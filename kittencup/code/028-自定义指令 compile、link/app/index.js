var myApp = angular.module("myApp", []);

var i = 0;
myApp.directive('customTags', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		template: '<div>{{user.name}}</div>',
		compile: function(tElement, tAttrs, transclude) {
			// compile中改变dom结构
			tElement.append(angular.element('<div>{{user.name}}{{user.count}}</div>'));
			// 编译阶段...
			// console.log(tElement); // 当前元素的jquery对象
			// console.log(tAttrs);
			console.log('customTags compile 编译阶段');
			return {
				// 表示在编译阶段之后 指令连接到子元素之前运行
				pre: function preLink(scope, iElement, iAttrs, controller) {
					console.log('customTags preLink...');
				},
				// 表示在所有子元素指令都连接之后才运行
				post: function postLink(scope, iElement, iAttrs, controller) {
					iElement.on('click',function(){
						scope.$apply(function(){
							scope.user.name = "click after";
							scope.user.count = ++i;
							// 进行一次脏检查 触发界面的改变
						});
					});
					console.log('customTags all child directive Link...');
				}
			};

			// compile返回的就是postLink函数
			// return function() {
			// 	console.log('compile return fun');
			// };
		},
		// 此link表示的就是postlink
		link: function() {

		},
		replace: true // 将标签也替换成template的值
	};
});

myApp.directive('customTags2', function() {
	return {
		restrict: 'ECAM', // 风格同时实现
		compile: function(tElement, tAttrs, transclude) {
			console.log('customTags2 compile 编译阶段');
			return {
				// 表示在编译阶段之后 指令连接到子元素之前运行
				pre: function preLink() {
					console.log('customTags2 preLink...');
				},
				// 表示在所有子元素指令都连接之后才运行
				post: function postLink() {
					console.log('customTags2 all child directive Link...');
				}
			};
		},
		replace: true // 将标签也替换成template的值
	};
});

myApp.directive('customTags2', function() {
	// directive直接返回一个函数就是postlink  也就是link属性的值
	return function() {

	};
});

// 显式的依赖注入
myApp.controller('firstController', ['$scope',
	function($scope) {
		$scope.users = [
			{
				id: 10,
				name: '张三'
			},
			{
				id: 20,
				name: '李四'
			}
		];
	}
]);