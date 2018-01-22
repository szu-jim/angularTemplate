/**
 * page3控制器
 */
mainApp.controller('page3Ctrl', ['$scope','$rootScope','$cookieStore','$http','$location', 'basePath', 'myAlert', function($scope,$rootScope,  $cookieStore, $http, $location, basePath, myAlert) {	
	$scope.$emit("tabChanged", 'page3');
	/*通知main控制器判断用户是否登陆*/
	$scope.$emit("login", 'login');

	/*获取cookie中保存的userId,然后在当前页面作用域设置userId*/
	var userId =  $cookieStore.get("userId");
	$scope.userId=userId;

	
}]);