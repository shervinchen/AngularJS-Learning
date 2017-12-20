'use strict';

app.service('cache', ['$cookies',
  function($cookies) {
    this.put = function(key, value) {
    	$cookies.put(key, value);
    };
    this.get = function(key) {
    	return $cookies.get(key);
    };
    this.remove = function(key) {
    	$cookies.remove(key);
    };
  }
]);

// 使用service和factroy定义服务作用及调用方式是一样的
// 区别在于factroy返回对象之前可以声明一些外部不可访问的私有属性

// app.factory('cache', ['$cookies',
//   function($cookies) {
//   	// var obj = {};
//     return {
//     	get: function(key) {
//     		return $cookies.get(key);
//     	},
//     	put: function(key, value) {
//     		$cookies.put(key, value);
//     	},
//     	remove: function(key) {
//     		$cookies.remove(key);
//     	}
//     };
//   }
// ]);