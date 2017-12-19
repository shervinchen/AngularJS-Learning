'use strict';

// 职位详情页
// $q实现promise  解决请求嵌套回调的问题
app.controller('positionCtrl', ['$q', '$http', '$state', '$scope',
  function($q, $http, $state, $scope) {
  	$scope.isLogin = false;

	// 职位信息
  	function getPosition() {
  		// 声明一个延迟加载对象
  		var def = $q.defer();    
	    $http.get('/data/position.json?id='+$state.params.id).then(function(response) {
	     	$scope.position = response.data;
	    	def.resolve(response);
	    }).catch(function(response) {
	    	def.reject(response);
	    });
	    return def.promise;
  	}

  	// 公司信息
  	function getCompany(id) {
	    $http.get('/data/company.json?id='+id).then(function(response) {
	      $scope.company = response.data;
	    }).catch(function(response) {});
  	}

  	// getPosition中的请求执行以后才执行then中的回调（因为这里必须先获取职位再获取公司信息）
  	// then里面传入的两个函数分别对应resolve和reject
  	getPosition().then(function(obj) {
  		console.log(obj);
  		getCompany(obj.data.companyId);
  	}, function(){});

    
    // 职位描述
  }
]);
