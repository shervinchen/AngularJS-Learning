var myApp = angular.module("myApp", [], ['$compileProvider',
	function($compileProvider){
		// 指令命名必须为驼峰式
		$compileProvider.directive('customTags',function(){
			return {
				// restrict: 'E', // 元素风格 <custom-tags></custom-tags>
				// restrict: 'C', // 样式类风格 <span class="custom-tags:exp;"></span>
				// restrict: 'A', // 属性风格 <span custom-tags="exp"></span>
				// restrict: 'M', // 注释风格 <!-- directive:my-dir exp -->
				restrict: 'ECAM', // 风格同时实现
				template: '<div>custom-tags-html</div>',
				replace: true, // 将标签也替换成template的值
				compile: function() {
					console.log(1);
				}
			};
		}); 
	}
]);

// myApp.directive('customTags',['$scope',
// 	function($scope) {

// 	}
// ]);

// 显式的依赖注入
myApp.controller('firstController', ['$scope',
	function($scope) {

	}
]);