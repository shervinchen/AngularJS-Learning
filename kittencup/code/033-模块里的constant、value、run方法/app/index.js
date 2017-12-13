var myApp = angular.module("myApp",[]);

// 声明整个应用范围内的常量 可以注入任何方法
myApp.constant('APIKEY', 'key');

// 声明常量 只能注入controller service factory
myApp.value('vension', '1.0.0');

myApp.config(function(APIKEY) {
	console.log('config');
});

// 注入启动之后执行某些操作，这些操作又需要在页面对用户可用之前执行
// 比如加载远程的模板(ajax)，需要在使用前放入缓存，或者在使用操作前判断用户是否登陆，未登录可以先去登陆页面
myApp.run(['$rootScope',function($rootScope) {
    	console.log('run');
	}
]);

// 显式的依赖注入
myApp.controller('firstController', ['$scope', 'APIKEY', 'vension',
	function($scope, APIKEY, vension) {
		// console.log(APIKEY);
		console.log('controller');
	}
]);
