'use strict';

var app = angular.module("app", ['ui.router']);

'use strict';

app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    	$stateProvider.state('main', {
    		url: '/main',
    		templateUrl: 'view/main.html',
    		controller: 'mainCtrl'
    	}).state('position', {
    		url: '/position/:id',
    		templateUrl: 'view/position.html',
    		controller: 'positionCtrl'
    	});
    	$urlRouterProvider.otherwise("main");
	}
]);

'use strict';

app.controller('mainCtrl', ['$scope',
  function($scope) {
    $scope.list = [
      {
        id: '1',
        imgSrc: 'image/company-3.png',
        name: '销售',
        companyName: '千度',
        city: '上海',
        industry: '互联网',
        time: '2016-06-01 11:05'
      },
      {
        id: '2',
        imgSrc: 'image/company-1.png',
        name: 'WEB前端',
        companyName: '慕课网',
        city: '北京',
        industry: '互联网',
        time: '2016-06-01 01:05'
      }
    ];
  }
]);

'use strict';

app.controller('positionCtrl', ['$scope',
  function($scope) {
    
  }
]);

'use strict';

app.directive('appFoot', [function() {
  return {
    templateUrl: 'view/template/foot.html',
    restrict: 'ECAM',
    replace: true
  };
}]);

'use strict';

app.directive('appHead', [function() {
  return {
    templateUrl: 'view/template/head.html',
    restrict: 'ECAM',
    replace: true
  };
}]);

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
    }
  };
}]);

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
