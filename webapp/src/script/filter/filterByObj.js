'use strict';

app.filter('filterByObj', [function(){
	// 第一个参数是过滤器左边的对象  第二个参数是过滤器冒号后的值
	// 在HTML之外的地方使用过滤器要加上后缀，比如：limitToFilter
	return function(list, obj){
		var result = [];
		angular.forEach(list, function(item) {
			var isEqual = true;
			for (var e in obj) {
				if (item[e] !== obj[e]) {
					isEqual = false;
				}
			}
			if (isEqual) {
				result.push(item);
			}
		});
		return result;
	};
}]);