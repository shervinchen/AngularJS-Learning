'use strict';

// 职位详情页
// $q实现promise  解决请求嵌套回调的问题
app.controller('positionCtrl', ['$log', '$q', '$http', '$state', '$scope', 'cache',
  function($log, $q, $http, $state, $scope, cache) {
    // cache.put('to', 'day');
    // cache.remove('to');

  	$scope.isLogin = !!cache.get('name');
    $scope.message = $scope.isLogin ? '投个简历' : '去登陆';
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
        if (response.data.posted) {
          $scope.message = '已投递';
        }
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

    $scope.go = function () {
      if ($scope.message !== '已投递') {
        if ($scope.isLogin) {
          $http.post('data/handle.json', {
            id: $scope.position.id
          }).then(function(response){
            $log.info(response);
            $scope.message = '已投递';
          }, function(response) {});
        } else {
          $state.go('login');
        }
      }
    }

    // $q.all([fun1(), fun2()]).then(function(result){});
    // $timeout(function(){}, 2000);
    // $interval(function(){}, 2000);

    // 职位描述
  }
]);
