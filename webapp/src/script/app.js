'use strict';

var app = angular.module("app", ['ui.router', 'ngCookies', 'validation', 'ngAnimate']);

// 所有页面加载之前初始化执行
// app.run(['$rootScope', function($rootScope) {
// 	$rootScope.im = function() {
// 		console.log('im');
// 	};
// }]);
