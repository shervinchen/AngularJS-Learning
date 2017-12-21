'use strict';

// 创建全局变量
app.value('dict', {}).run(['dict', '$http', function(dict, $http){
	$http.get('/data/city.json').then(function(response) {
		dict.city = response.data;
    }).catch(function(response) {});
    $http.get('/data/salary.json').then(function(response) {
		dict.salary = response.data;
    }).catch(function(response) {});
    $http.get('/data/scale.json').then(function(response) {
		dict.scale = response.data;
    }).catch(function(response) {});
}]);