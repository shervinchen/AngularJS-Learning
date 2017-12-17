'use strict';

app.directive('appPositionList', [function() {
  return {
    templateUrl: 'view/template/positionList.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
      data: '=' // 表示指令与控制器共享scope
    }
  };
}]);
