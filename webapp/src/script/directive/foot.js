'use strict';

app.directive('appFoot', [function() {
  return {
    templateUrl: 'view/template/foot.html',
    restrict: 'ECAM',
    replace: true
  };
}]);
