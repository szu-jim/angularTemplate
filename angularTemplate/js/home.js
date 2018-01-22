/**
 * 首页控制器
 */
mainApp.controller('homeCtrl', ['$scope','$rootScope','$http', 'basePath', 'myAlert', function($scope,$rootScope, $http, basePath, myAlert) {
	
	$scope.$emit("tabChanged", 'home');
	/*获取cookie中保存的userId,然后在当前页面作用域设置userId*/
	var userId =  $cookieStore.get("userId");
	$scope.userId=userId;
}]);