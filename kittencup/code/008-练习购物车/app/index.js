var cartApp = angular.module("cartApp",[]);

cartApp.controller('cartController', ['$scope',
	function($scope) {
		$scope.cart = [
			{
				id: 1000,
				name: 'iphone5s',
				quantity: 3,
				price: 4300
			},
			{
				id: 3300,
				name: 'iphone5s',
				quantity: 30,
				price: 3300
			},
			{
				id: 232,
				name: 'mac',
				quantity: 4,
				price: 23000
			},
			{
				id: 1400,
				name: 'ipad',
				quantity: 5,
				price: 6900
			}
		];

		// 计算购物总价
		$scope.totalPrice = function() {
			var total = 0;
			angular.forEach($scope.cart, function(item){
				total += item.quantity * item.price;
			});
			return total;
		};

		// 计算总购买数
		$scope.totalQuantity = function() {
			var total = 0;
			angular.forEach($scope.cart, function(item){
				total += parseInt(item.quantity);
			});
			return total;
		};

		// 找一个元素的索引
		var findIndex = function(id) {
			var index = -1;
			angular.forEach($scope.cart, function(item, key){
				if (item.id === id) {
					index = key;
					return;
				}
			});
			return index;
		};

		// 为某个产品添加一个数量
		$scope.add = function(id) {
			var index = findIndex(id);
			if (index !== -1) {
				$scope.cart[index].quantity++;
			}
		};

		// 为某个产品减少一个数量
		$scope.reduce = function(id) {
			var index = findIndex(id);
			if (index !== -1) {
				var item = $scope.cart[index];
				if (item.quantity > 1) {
					item.quantity--;
				} else {
					var returKey = confirm('是否从购物车内删除该产品？');
					if (returKey) {
						$scope.remove(id);
					}
				}
			}
		};

		// 移除一项
		$scope.remove = function(id) {
			var index = findIndex(id);
			// 如果找到了那个item
			if (index !== -1) {
				$scope.cart.splice(index, 1);
			}

			// 通过ng方法触发的 最后都会进行脏检查
		};

		$scope.$watch('cart', function(newValue, oldValue){
			angular.forEach(newValue, function(item, key){
				if (item.quantity < 1) {
					var returKey = confirm('是否从购物车内删除该产品？');
					if (returKey) {
						$scope.remove(item.id);
					} else {
						item.quantity = oldValue[key].quantity;
					}
				}
			});
		}, true);
	}
]);
