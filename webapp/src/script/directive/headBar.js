'use strict';

app.directive('appHeadBar', [function() {
  return {
    templateUrl: 'view/template/headBar.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
    	text: '@'
    },
    link: function($scope) {
    	$scope.back = function() {
    		window.history.back();
    	};
        // // 接收父级companyCtrl的广播事件
        // $scope.$on('abc', function(event, data) {
        //     console.log(event, data);
        // });
        // // 向上冒泡一个事件
        // $scope.$emit('cba', {name: 2});

        // 用原生的方法操作dom或者双向数据绑定失效后 手动调用$digest()触发数据和视图的同步
        // $scope.$digest();
    }
  };
}]);
