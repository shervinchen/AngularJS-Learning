'use strict';

// 职位详情页
// $q实现promise  解决请求嵌套回调的问题
app.controller('positionCtrl', ['$q', '$http', '$state', '$scope', 'cache',
  function($q, $http, $state, $scope, cache) {
    // cache.put('to', 'day');
    cache.remove('to');

  	$scope.isLogin = false;
    // 所有$scope都能调用$rootScope上定义的方法
    // $scope.im();

	   // 职位信息
  	function getPosition() {
  		// 声明一个延迟加载对象
  		var def = $q.defer();
      // $http['post'/'delete'/'put']('url',{数据对象},{配置对象})
      /*$http({
        url: '',
        method: '',
        params: {},
        data: {}
      })*/
      // get 请求也可以用params配置对象来配置请求的参数
	    $http.get('/data/position.json', {
        params: {id: $state.params.id}
      }).then(function(response) {
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
  		getCompany(obj.data.companyId);
  	}, function(){});

    // $q.all([fun1(), fun2()]).then(function(result){});
    // $timeout(function(){}, 2000);
    // $interval(function(){}, 2000);

    // 职位描述
  }
]);
