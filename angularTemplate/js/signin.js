signApp.controller('signinCtrl', [ '$scope', '$cookieStore','$http', 'basePath', 'signAlert',
'md5', function($scope, $cookieStore, $http, basePath, signAlert, md5) {

	// 登录
	$scope.signinSubmit = function(isValid) {
		if (!isValid) {
			return;
		}
		var umId = $scope.signin.name;
		// var passWd = md5.createHash($scope.signin.password || '');
		var passWd = encode64($scope.signin.password || '');// 切换加密方式
		// $http({
		// 	method : 'GET',
		// 	url : basePath+'web/index.php?r=site/paicdomlogin',
		// 	params : {
		// 		userId : umId,
		// 		passWd : passWd,
		// 	},
		// 	paramSerializer : '$httpParamSerializerJQLike'
		// }).success(function(data, status) {
		// 	if (data.code =='000000') {
		// 		$cookieStore.put('userId',umId);
		// 		location.href = 'index.html';						
		// 	} else {
		// 		alert(data.message);
		// 	}
		// }).error(function(data,status) {
		// 	console.log(data);
		// });

		//先通过验证，以后要删
		$cookieStore.put('userId',umId);
		location.href = 'index.html';
	};
} ]);