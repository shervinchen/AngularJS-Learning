'use strict';

app.directive('appCompany', [function() {
  return {
    templateUrl: 'view/template/company.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
    	com: '='
    }
  };
}]);
