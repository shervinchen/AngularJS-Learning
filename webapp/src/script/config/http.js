'use strict';

app.config(['$provide', function ($provide) {
	$provide.decorator('$http', ['$delegate', '$q', function($delegate, $q){
		// 修改http默认的post函数，让其发送一个get请求
		$delegate.post = function(url, data, config) {
			var def = $q.defer();
			$delegate.get(url).then(function(response) {
				def.resolve(response);
			}).catch(function(response) {
				def.reject(response);
			});
			return {
				then: function(cb) {
					def.promise.then(cb);
				},
				catch: function(cb) {
					def.promise.then(null, cb);
				}
			};
		};
		return $delegate;
	}]);
}]);